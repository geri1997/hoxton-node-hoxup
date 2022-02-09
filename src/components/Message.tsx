import { MessageProps } from "../types"

function Message ({ message, outgoing }:MessageProps) {
  return (
    <li className={outgoing ? 'outgoing' : 'incoming'}>
      <p>{message.messageText}</p>
    </li>
  )
}

export default Message
