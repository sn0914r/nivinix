import { useState } from 'react';
import MessageList from '../../../components/admin/messages/MessageList';
import MessageView from '../../../components/admin/messages/MessageView';
const MessageDashboard = () => {
  // Sample messages data with read/unread status
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      subject: "Website Development Project Inquiry",
      message:
        "Hello! I'm reaching out regarding a potential website development project for our tech startup. We're looking to build a modern, responsive website with e-commerce capabilities. Our budget is around $15,000 and we'd like to launch within 3 months. Could we schedule a call to discuss the requirements in detail? We're particularly interested in your React and Node.js expertise. Please let me know your availability for next week. Looking forward to hearing from you!",
      isRead: false,
      timestamp: "2024-01-20T10:30:00Z",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@digitalagency.com",
      subject: "Partnership Opportunity - Web Development",
      message:
        "Hi there! I represent a digital marketing agency and we're constantly looking for reliable web development partners. We have several clients who need custom websites and web applications. Would you be interested in a partnership where we handle marketing and you handle development? We typically work on projects ranging from $5,000 to $50,000. Let's discuss how we can work together to serve our clients better.",
      isRead: true,
      timestamp: "2024-01-19T14:15:00Z",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@startup.io",
      subject: "Mobile App Development Quote Request",
      message:
        "Good morning! We're a fintech startup looking to develop a mobile application for both iOS and Android. The app will include features like user authentication, payment processing, data visualization, and real-time notifications. We have detailed wireframes and user stories ready. Could you provide a quote and timeline for this project? We're hoping to launch in Q2 2024.",
      isRead: false,
      timestamp: "2024-01-18T09:45:00Z",
    },
    {
      id: 4,
      name: "David Thompson",
      email: "david.thompson@ecommerce.com",
      subject: "Urgent: Website Bug Fix Required",
      message:
        "Hi! We're experiencing a critical issue with our e-commerce website that you developed last year. The checkout process is failing intermittently, and we're losing sales. This is urgent as it's affecting our revenue. The error seems to occur during payment processing. Can you please look into this ASAP? We're available for a call anytime today to discuss the issue in detail.",
      isRead: false,
      timestamp: "2024-01-17T16:20:00Z",
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@nonprofit.org",
      subject: "Non-Profit Website Development",
      message:
        "Hello! I work for a non-profit organization focused on environmental conservation. We need a new website to showcase our mission, accept donations, and manage volunteer registrations. Our budget is limited, but we're hoping you might consider offering a discounted rate for non-profit work. The website would need to be mobile-friendly and easy for our team to update. Thank you for considering our request!",
      isRead: true,
      timestamp: "2024-01-16T11:10:00Z",
    },
    {
      id: 6,
      name: "Robert Martinez",
      email: "robert.m@consulting.com",
      subject: "Custom CRM System Development",
      message:
        "We're a consulting firm looking to develop a custom CRM system tailored to our specific needs. The system should include client management, project tracking, invoicing, and reporting features. We've tried off-the-shelf solutions, but they don't meet our unique requirements. Would you be interested in discussing this project? We have a detailed requirements document ready and a flexible timeline.",
      isRead: false,
      timestamp: "2024-01-15T13:30:00Z",
    },
    {
      id: 7,
      name: "Jennifer Adams",
      email: "j.adams@retailstore.com",
      subject: "E-commerce Platform Migration",
      message:
        "Hi! We currently have an outdated e-commerce platform and need to migrate to a modern solution. We have over 1,000 products and need to maintain our SEO rankings during the migration. The new platform should support multiple payment gateways, inventory management, and customer accounts. Can you help us with this migration project? We're looking to complete this within 2 months.",
      isRead: true,
      timestamp: "2024-01-14T08:25:00Z",
    },
    {
      id: 8,
      name: "Alex Kumar",
      email: "alex.kumar@techstartup.com",
      subject: "React Native App Development",
      message:
        "Hello! We're developing a social networking app and need React Native developers to join our team. This would be a long-term contract position with potential for full-time employment. The app includes features like user profiles, messaging, content sharing, and real-time updates. Are you available for contract work? We offer competitive rates and the opportunity to work on cutting-edge technology.",
      isRead: false,
      timestamp: "2024-01-13T15:45:00Z",
    },
  ])

  const [selectedMessage, setSelectedMessage] = useState(null)

  const handleOpenMessage = (messageId) => {
    const message = messages.find((msg) => msg.id === messageId)
    setSelectedMessage(message)

    // Mark message as read if it wasn't already
    if (!message.isRead) {
      setMessages((prevMessages) => prevMessages.map((msg) => (msg.id === messageId ? { ...msg, isRead: true } : msg)))
    }
  }

  const handleBackToMessages = () => {
    setSelectedMessage(null)
  }

  // If a message is selected, show the detailed view
  if (selectedMessage) {
    return <MessageView message={selectedMessage} onBack={handleBackToMessages} />
  }

  // Main messages dashboard view
  return <MessageList messages={messages} onOpenMessage={handleOpenMessage} />
}

export default MessageDashboard;
