# Likor Web-App


## Description: 

Likor is DiFFrenZZ Project's chat-web-app.
Likor uses Matrix open standard for secure, decentralised, real-time communication.
It brings to its user :
- Total anonymousity: encryption is based on the Double Ratchet Algorithm, but extended to support encryption to rooms containing thousands of devices.<br><br>
- Fully decentralised conversations with no single points of control or failure: When you send a message in Likor, it is replicated over all the servers whose users are participating in a given conversation.  Even if your server goes offline, the conversation can continue uninterrupted elsewhere until it returns.
--->  This is how Likor democratises **control over communication**.
- Exchanging data and messages with other platforms using an Open Standard: Supports dynamically bridging IRC channels on demand and synchronised user-lists through maintained bridges to Slack, Telegram, What's App, Hangouts, Gitter, iMessage...

Services & Channels avalaible to users in Berlin exclusively[^1]: 
 
 - Lost & Found channel: <br> People who just lost an object or an animal which ownership can be proven (id, passport, phone, dog,...), have now a greater chance to find it back by posting an ads and searching through the channel's conversation history (limit to 10 days prior). <br> NB: Anyone is free to propose a reward or request a compensation for any exchange or trade of goods and/services. <br> Nevertheless, it is worth saying that "DiFFrenZZ" intends to promote free mutual aid and information sharing through "Likor" web-app.
 
 - Dead-dropping: <br> The dead drop method allows the vendor to drop the product at a secret and random geographical location that only the two parties are aware of. This idea skips the global mail systems and customers can remain anonymous and don’t have to reveal an address.

- Escrow Accounts: <br> Escrow *is a process used when two parties are in the process of completing a transaction, and there is uncertainty over whether one party or another will be able to fulfill their obligations. Contexts that use escrow include Internet transactions, banking, intellectual property, real estate, mergers and acquisitions, and law, and many more*. 

[^1]: Users located out of the State will not have restricted access to certain functionalities. These restrictions are set in order to implement trust between parties, sellors, vendors and DiFFrenZZ administrator(s). It allows an exchange of goods and services based on promise[^a]
         
  [^a]: promise: Here, the word "promise" is interpreted as a transaction whereby a person makes a vow or the suggestion of a guarantee.

Development cycle: Deming wheel/PDCA (where A=adjust)

### Usage:
o create chatrooms, direct chats and chat bots, complete with end-to-end encryption, file transfer, synchronised conversation history, formatted messages, read receipts and more.

Version: 2.411.0-alpha.1 *
* Versioning  mj-c. min-c[main(first digit)-sub(00) folders)].patch-release

### What's new ...?:
- Private chat: In the Chat section, you can start a private room with any user
- Favorite Channels: You can now starr your favourite channels. They will remain in the sidebar at your next log in unless you "un"-starr them.
- Image Uploader: Upload ".png" and ".jpg"/".jpeg" files
- Sign out button: You can now log out 
- Notifications: With tags, you know know exactly how many messages you missed in channels and private chats
- Status indicator: You can now see who is connected during your session and who is not.
 ![[Pasted image 20201027145659.png]]
 
 
#### Authentication: 
- Removed Gmail authentication: requested from testers who want to connect anonymously to the app
- Added email registration without email verification


### Fix:
- The "#" symbol, sometimes remained in the sidebar after delation of a channel. For now you cannot delete a channel. A delete button will be included in the next patch. (I also want to add up content for testing purposes, not remove it)
- The search bar was not working on iOS devices and had an algorithm issue. It has been removed.
- The send button was not working on iOS devices. It works now on any device and any format.

### Design:
- Text formating & color: The text was visible on small devices even though one would be a good distance away. Although, format remained barely readable. 
- Removed unecessary options: those either not working, undergoing work or for decorative purpose.

Naming:
Likor-Sblack is now Likor. 
Likor-S"color" (where color=random color) served me to identify prototypes I was designing for DiFFrenZZ web-chat-app. 

Likor is the contraction of 2 latin words
* Loquor-*speak[neg.]* (Nec Gallice nec Theodisce loquor) 
* Liquo (as, are, avi, atum) - *to clarify* - common meaning during the 1st century BC was (HORATIUS/HORACE)
