import { FaArrowLeft } from "react-icons/fa"
import "../../../styles/components/admin/messages/MessageView.css"

const MessageView = ({ message, onBack }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
  }

  return (
    <div className="message-view-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <button className="back-button" onClick={onBack}>
              <FaArrowLeft />
              Back to Messages
            </button>

            <div className="message-detail-card">
              <div className="message-header">
                <div className="sender-info">
                  <div className="sender-avatar">{getInitials(message.name)}</div>
                  <div className="sender-details">
                    <h2 className="sender-name">{message.name}</h2>
                    <p className="sender-email">{message.email}</p>
                    <span className="message-timestamp">{formatDate(message.timestamp)}</span>
                  </div>
                </div>
              </div>

              <div className="message-subject">
                <h3>{message.subject}</h3>
              </div>

              <div className="message-content">
                <p>{message.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageView
