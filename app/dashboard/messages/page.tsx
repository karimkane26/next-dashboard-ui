import { messagesData } from "@/lib/data";

// Page "/dashboard/messages" : une simple liste de cartes (même style que Announcements)
const MessagesPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">Messages</h1>

      <div className="flex flex-col gap-4 mt-4">
        {messagesData.map((message) => (
          <div
            key={message.id}
            className="rounded-md p-4 odd:bg-lamaSkyLight even:bg-lamaPurpleLight"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{message.subject}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {message.date}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">From: {message.from}</p>
            <p className="text-sm text-gray-600 mt-2">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
