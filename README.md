# React Chat Application

This is a frontend implementation of a chat application built using React, where users can engage in conversations with their contacts. The application allows users to search for conversations by contact name, view and send messages, and manage conversations.

## Features

- #### User Authentication:
        - Assume you are a dummy logged-in user.
- #### Dummy Data: 
        - Use a JSON file to load some dummy data in the project.
- #### Search: 
        - Conversations should be searchable by contact name.
- #### Left Sidebar:
        - Show all the conversations created here.
        - Each conversation should display the contact name and some text from the last message in the chat.
        - A button to create a new conversation.
        - On clicking this button, open a pop-up and load all the contacts (from the dummy data file).
        - Clicking a contact should start a new conversation (if no conversation was previously started) or open the existing conversation for that contact.
- #### Right Side View:
        - Show the messages of the currently selected conversation.
        - Send a message in the conversation.
        - Handle errors and success alerts and show appropriate notifications.

## Installation

1. Clone the repository:
```
git clone https://github.com/spunkysyed/React-Chat-App
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

## Usage

### Left Sidebar

- Contact List: Displays all conversations with the contact name and the last message.
- Search Bar: Allows searching for conversations by contact name.
- New Conversation Button: Opens a pop-up to start a new conversation.

### Right Sidebar

- Conversation List: Shows the messages of the selected conversation.
- Message Input: Allows sending new messages in the conversation.
- Alerts/Notifications: Displays success and error messages.

## Persistent Data

- Redux Persist: The Redux data is made persistent using redux-persist, ensuring that messages and conversations remain intact even after a refresh.

Technologies Used :-

1. React
2. Redux
3. React Bootstrap
4. Emoji Picker React
5. Html
6. Css
7. Bootstrap

## Folder Structure

```
ReactChatApp/
|-- public/
|   |-- index.html           # Main HTML file, serves as the entry point for the app
|   |-- manifest.json        # Metadata for the web app (e.g., icons, theme color)
|   |-- robots.txt           # Directives for web crawlers (e.g., SEO)
|
|-- src/
|   |-- actions/             # Contains action creators and action types for Redux
|        |-- actionTypes.js  # Defines constants for action types, helps avoid typos
|        |-- contact.js      # Action creators related to contact state
|
|   |-- components/          # All React components are organized here
|        |-- LeftSidebar/    # Components related to the left sidebar
|            |-- ContactAvatar.js         # Renders the avatar for a contact
|            |-- ContactCardAllMembers.js # Displays all contact cards
|            |-- ContactLastMessage.js    # Shows the last message in a contact's chat
|            |-- ContactList.js           # Lists all contacts
|            |-- ContactTab.js            # Represents a single contact tab
|            |-- NewConversation.js       # Button/component to start a new conversation
|            |-- NewConversationTab.js    # Tab for creating a new conversation
|            |-- ProfileHeader.js         # Displays the profile header
|            |-- SearchBar.js             # Search bar component for filtering contacts
|        |-- RightSidebar/   # Components related to the right sidebar
|            |-- ConversationList.js      # Lists all messages in the selected conversation
|            |-- LeftChatBubble.js        # Displays a message bubble from the contact
|            |-- MessageBox.js            # Container for messages in a conversation
|            |-- MessageInput.js          # Input field to type and send messages
|            |-- NoConversation.js        # Placeholder when no conversation is selected
|            |-- RightChatBubble.js       # Displays a message bubble from the user
|        |-- stylesheet/     # CSS stylesheets for the components
|            |-- App.css                 # General styles for the app
|            |-- leftSidebar.css         # Styles specific to the left sidebar
|            |-- rightSidebar.css        # Styles specific to the right sidebar
|            |-- searchBar.css           # Styles specific to the search bar
|        |-- App.js           # Main React component that brings everything together
|
|   |-- Data/                 # Contains static data for the app
|        |-- users.js         # Dummy data for users and contacts
|
|   |-- reducers/             # Reducers to manage Redux state
|        |-- contact.js       # Reducer for contact-related state
|        |-- index.js         # Combines all reducers into a single reducer
|        |-- user.js          # Reducer for user-related state
|
|   |-- store/                # Redux store configuration
|        |-- user.js          # Store setup for managing user state
|
|   |-- index.css             # Global styles for the app
|
|   |-- index.js              # Entry point for the React application
|
|   |-- rimouski sb.otf       # Custom font used in the app
|
|-- reducers/                 # (Duplicate) Consider removing if not used
|   |-- contactReducer.js     # (Duplicate) Consider removing if not used
|
|-- .gitignore                # Specifies which files and directories to ignore in Git
|
|-- package-lock.json         # Exact version of installed dependencies (auto-generated)
|   
|-- package.json              # Lists project dependencies and scripts
|
|-- README.md                 # Documentation for the project

```





