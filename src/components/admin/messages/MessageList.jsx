import { FaEnvelope, FaEnvelopeOpen, FaEye } from "react-icons/fa"
import "../../../styles/components/admin/messages/MessageList.css"

const MessageList = ({ messages, onOpenMessage }) => {
  // Calculate read/unread counts
  const unreadCount = messages.filter((msg) => !msg.isRead).length
  const readCount = messages.filter((msg) => msg.isRead).length

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
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
    <div className="message-list-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Header with counts */}
            <div className="dashboard-header">
              <h1 className="dashboard-title">Message Dashboard</h1>
              <div className="message-counts">
                <div className="count-card unread">
                  <FaEnvelope className="count-icon" />
                  <div className="count-info">
                    <span className="count-number">{unreadCount}</span>
                    <span className="count-label">Unread</span>
                  </div>
                </div>
                <div className="count-card read">
                  <FaEnvelopeOpen className="count-icon" />
                  <div className="count-info">
                    <span className="count-number">{readCount}</span>
                    <span className="count-label">Read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Grid */}
            <div className="row g-4">
              {messages.map((message) => (
                <div key={message.id} className="col-12 col-md-6 col-xl-4">
                  <div className={`message-card ${!message.isRead ? "unread" : "read"}`}>
                    <div className="card-header-section">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="user-avatar">{getInitials(message.name)}</div>
                        {!message.isRead && <div className="unread-badge">NEW</div>}
                      </div>
                      <h5 className="user-name mb-1">{message.name}</h5>
                      <p className="user-email mb-0">{message.email}</p>
                    </div>

                    <div className="card-body-section">
                      <h6 className="message-subject mb-3">{message.subject}</h6>
                      <p className="message-preview mb-3">{message.message.substring(0, 100)}...</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="message-time">{formatDate(message.timestamp)}</span>
                        <button className="open-btn" onClick={() => onOpenMessage(message.id)}>
                          <FaEye className="me-2" />
                          Open
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageList
