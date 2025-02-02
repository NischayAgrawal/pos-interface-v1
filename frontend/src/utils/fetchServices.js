import axios from "axios";

export const fetchServices = async () => {
  try {
    // const response = await axios.get("/services");
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              name: "Yoga Class",
              description: "1-hour beginner yoga session.",
              price: "1000",
              image:
                "https://media.istockphoto.com/id/592680860/photo/meditating-in-prayer-pose.jpg?s=612x612&w=0&k=20&c=PjYvLch0SS9L5fgDnobw_T-mcN6VoLMc3A866wAhhWk=",
            },
            {
              id: 2,
              name: "Therapy Session",
              description: "45-minute one-on-one therapy.",
              price: "5000",
              image:
                "https://media.istockphoto.com/id/1649071889/photo/vulnerable-woman-shares-something-with-therapist-during-therapy-session.jpg?s=2048x2048&w=is&k=20&c=NI69eDzqUj4ZZmk3bppX8UxWfEtfz9PiYIqdQR6Zx3E=",
            },
            {
              id: 3,
              name: "Workshop",
              description: "1-hour group workshop on mindfulness.",
              price: "2500",
              image:
                "https://media.istockphoto.com/id/846236748/photo/group-of-young-sporty-people-meditating-in-padmasana-pose.jpg?s=2048x2048&w=is&k=20&c=j-B5B3pUog1rUCCgLiva8zsYXo9L2PKqJZoGH1QiiKA=",
            },
            {
              id: 4,
              name: "Personal Training Sessions",
              description: "One-on-one fitness training session.",
              price: "3000",
              image:
                "https://media.istockphoto.com/id/853737564/photo/trainer-holding-a-woman-in-the-leg-exercise-by-sid-ups.jpg?s=2048x2048&w=is&k=20&c=rkJMQ6jh6DbGFCFJDQxz_7EGMoYA4NWNKRFcp7IAvH4=",
            },
          ],
        });
      }, 2000);
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch services. Please try again.");
  }
};
