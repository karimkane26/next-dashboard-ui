import { donneesMessages } from "@/lib/donnees";

// Page "/tableau-de-bord/messages" : une simple liste de cartes
const PageMessages = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">Messages</h1>

      <div className="flex flex-col gap-4 mt-4">
        {donneesMessages.map((message) => (
          <div
            key={message.id}
            className="rounded-md p-4 odd:bg-bleuCielClair even:bg-violetDouxClair"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{message.objet}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {message.date}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">De : {message.expediteur}</p>
            <p className="text-sm text-gray-600 mt-2">{message.texte}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageMessages;
