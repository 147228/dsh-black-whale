const body = document.body
const focusButton = document.querySelector('#focusToggle')
const focusLabel = document.querySelector('#focusLabel')
const traceButton = document.querySelector('#traceToggle')
const tracePanel = document.querySelector('#tracePanel')
const composer = document.querySelector('#composer')
const prompt = document.querySelector('#prompt')
const stream = document.querySelector('#chatStream')
const title = document.querySelector('#conversationTitle')
const kind = document.querySelector('#conversationKind')

focusButton?.addEventListener('click', () => {
  const enabled = !body.classList.contains('focus-mode')
  body.classList.toggle('focus-mode', enabled)
  focusButton.setAttribute('aria-pressed', String(enabled))
  focusLabel.textContent = enabled ? '退出专注' : '专注模式'
})

traceButton?.addEventListener('click', () => {
  const expanded = traceButton.getAttribute('aria-expanded') !== 'true'
  traceButton.setAttribute('aria-expanded', String(expanded))
  traceButton.textContent = expanded ? '收起过程' : '查看过程'
  tracePanel.hidden = !expanded
})

for (const session of document.querySelectorAll('.session')) {
  session.addEventListener('click', () => {
    document.querySelector('.session.active')?.classList.remove('active')
    session.classList.add('active')
    title.textContent = session.dataset.title ?? ''
    kind.textContent = session.dataset.kind ?? ''
  })
}

document.querySelector('#newSession')?.addEventListener('click', () => {
  document.querySelector('.session.active')?.classList.remove('active')
  title.textContent = '新会话'
  kind.textContent = 'BLACK WHALE LAB'
  prompt.focus()
})

composer?.addEventListener('submit', (event) => {
  event.preventDefault()
  const value = prompt.value.trim()
  if (!value) {
    prompt.focus()
    return
  }

  const user = document.createElement('article')
  user.className = 'message user-message'
  const role = document.createElement('span')
  role.className = 'message-role'
  role.textContent = '你'
  const content = document.createElement('div')
  const line = document.createElement('p')
  line.textContent = value
  content.append(line)
  user.append(role, content)
  stream.append(user)
  prompt.value = ''
  stream.scrollTo({ top: stream.scrollHeight, behavior: 'smooth' })

  window.setTimeout(() => {
    const reply = document.createElement('article')
    reply.className = 'message assistant-message'
    const whaleRole = document.createElement('span')
    whaleRole.className = 'message-role whale-role'
    const whale = document.createElement('img')
    whale.src = '/assets/dsh-black-whale.png'
    whale.alt = ''
    whaleRole.append(whale)
    const answer = document.createElement('div')
    const answerLine = document.createElement('p')
    answerLine.className = 'answer-lead'
    answerLine.textContent = '这是一条本地交互演示回复。正式安装后，皮肤不会接管 Harness 的模型调用。'
    answer.append(answerLine)
    reply.append(whaleRole, answer)
    stream.append(reply)
    stream.scrollTo({ top: stream.scrollHeight, behavior: 'smooth' })
  }, 360)
})
