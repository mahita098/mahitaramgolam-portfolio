import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogArticleHeader from "../../components/BlogArticleHeader";
import { Box, Center, Flex, Tabs } from "@chakra-ui/react";

const items = [
  {
    title: "1",
    contentTitle: "Day 1 - Our Tamassa Hotel Adventure & Birthday",
    summary:
      "It was a hectic yet fun day as we left home later than planned for our stay at Tamassa Hotel. After a minor setback (Mom forgetting her ID!), we finally arrived at the hotel around 5:30 pm. Check-in was a breeze, thanks to my sister handling everything earlier. We spent some time exploring the hotel, then raced to the beach just in time for sunset, enjoying a beautiful walk and snapping photos. Since it was my mom’s birthday, we surprised her with a cake before heading to the buffet dinner at the SHOW Restaurant. The buffet had an impressive selection of seafood, Indian dishes, and desserts, and we tried a local drink called Tamastic. After dinner, we enjoyed some live entertainment, with my mom even getting a special birthday surprise from the hotel staff. We ended the night exhausted but happy, heading back to our rooms to rest",
    content: "Dolore ex esse laboris elit magna esse sunt",
  },
  {
    title: "2",
    contentTitle: "Day 2 at Tamassa - Pool Fun, Activities & Good Vibes ",
    summary:
      "Day 2 was packed with fun and activities! We started with a delicious breakfast, then hit the pool for some refreshing swim time. After playing a game with a kids’ ball, we had a tasty lunch, with a Truck Burger being the highlight. In the afternoon, we went on a glass-bottom boat ride to explore the underwater world, followed by a sauna and hamam session (though I didn’t last long in either!). We also stumbled upon a foam party at the pool, which was super fun. After tea time, we swam a bit more and then tried our hand at tennis, where I wasn’t exactly a pro! Dinner was a hit, especially with the Rum Coco and Pina Coladas, followed by some dancing at the B-BAR. We ended the night exhausted but happy at 11 pm",
    content:
      "Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.",
  },
  {
    title: "3",
    contentTitle: "Day 3 - Sunday Chill",
    summary:
      "I started my Sunday with some alone time at the beach, enjoying the peaceful morning view. After breakfast, I swam in the pool, even though the water was colder, but it was still refreshing. We packed up, and luckily, we were able to get a late check-out until 2 pm. For lunch, I decided to switch it up and enjoy kebabs and lamb, which were amazing. We didn’t visit the Playa restaurant since it wasn’t included in the package, but overall, I had a great time. The only downside was the number of cats on the property, which made me worry about them multiplying, so I left a negative review about it",
    content:
      "Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.",
  },
];

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto  w-full flex flex-col items-center justify-center">
      <Header />
      <div className="container mt-28  px-4 md:p-0 mx-auto max-w-5xl ">
        <div className="mb-16">
          <BlogArticleHeader
            title="Tamassa Resort at Bel-Ombre Mauritius"
            subtitle="A Refreshing Break: My 3-Day Stay at TAMASSA Hotel 🌴"
            moredescription="All-inclusive package"
            date="17 Dec 2024"
            readtime="5 mins"
          />
        </div>

        <div className=" mb-20 bg-[#0e1419] p-10">
          <img src="../images/tamassa.jpg" alt="" />
        </div>

        {/* Chakra UI Tabs */}
        <Flex minH="dvh">
          <Tabs.Root
            defaultValue="1"
            width="full"
            colorPalette="red"
            variant="outline"
            justify="center"
            fitted="true"
          >
            <Tabs.List className="font-bold">
              {items.map((item, index) => (
                <Tabs.Trigger
                  key={index}
                  value={item.title}
                  className="font-bold"
                >
                  Day {item.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Box pos="relative" minH="200px" width="full">
              {items.map((item, index) => (
                <Tabs.Content
                  key={index}
                  value={item.title}
                  position="absolute"
                  inset="0"
                  _open={{
                    animationName: "fade-in, scale-in",
                    animationDuration: "300ms",
                  }}
                  _closed={{
                    animationName: "fade-out, scale-out",
                    animationDuration: "120ms",
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-xl italic">
                      {item.contentTitle}
                    </p>
                    <p className="italic">
                      <span className="italic font-semibold">
                        Quick Overview :{" "}
                      </span>
                      {item.summary}
                    </p>
                  </div>

                  {item.content}
                </Tabs.Content>
              ))}
            </Box>
          </Tabs.Root>
        </Flex>
      </div>

      <Footer />
    </div>
  );
};

export default Tamassa;
