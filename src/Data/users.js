import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Syed Ali Haider",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Abhijeet",
          image:
            "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
          chatlog: [
            {
              text: "Hi Bro,How are you!",
              timestamp: "11:09",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Abhineet. How are you!",
              timestamp: "11:10",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Abhineet.",
              timestamp: "11:11",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "11:11",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "11:13",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: " Antoine",
          image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "12:01",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Antoine , How are you!",
              timestamp: "12:02",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "12:03",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "12:04",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "12:05",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Sophie",
          image:
            "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
          chatlog: [
            {
              text: "Hi, Abhineet!",
              timestamp: "09:01",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Sophie. How are you!",
              timestamp: "09:02",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Abhineet.",
              timestamp: "09:03",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "09:04",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "09:05",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Alexander",
          image:
            "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
          chatlog: [],
        },
        {
          id: 6,
          name: "Benjamin",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
          chatlog: [
            {
              text: "Hey Benjamin, where is ur Big bro?",
              timestamp: "20:01",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "20:02",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  Abhineet ?",
              timestamp: "20:03",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "20:04",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Benjamin...",
              timestamp: "20:05",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Johannes",
          image:
            "https://plus.unsplash.com/premium_photo-1708275671991-6b8514fc53ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "21:06",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "21:06",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "21:07",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "21:08",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "21:09",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "21:09",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Emma",
          image:"https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "18:06",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "18:06",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "18:07",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "18:08",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "18:09",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "18:09",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 9,
          name: "David",
          image:
            "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
          chatlog: [],
        },
      ],
    },
  };