import Card from "./../card/Card";
export default function About() {
  return (
    <div className="about bg-green-400 text-center font-bold text-3xl py-4">
      <p>About Us</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4grid lg-cols-4 p-25 lg:gap-3 md:gap-3">
        <Card
          card="Learn Quran Online - Anywhere, Anytime"
          disc="Join our interactive online Quran classes. Learn Tajweed, Tafsir, and Quranic studies from qualified teachers at your convenience, no matter where you are."
          imgSrc="/new2.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
        <Card
          card="Certified Quran Teachers"
          disc="Our academy offers qualified and experienced Quran teachers to help you understand and memorize the Quran. Start your Quran learning journey today!"
          imgSrc="/quran2.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
        <Card
          card="Flexible Quran Classes for All Ages"
          disc="Whether you are a beginner or advanced learner, our Quran classes are tailored for all ages. Enroll today and progress at your own pace."
          imgSrc="/quran3.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
        <Card
          card="Interactive Quran Learning Experience"
          disc="Experience an engaging and interactive way of learning the Quran with live sessions, group discussions, and personalized guidance."
          imgSrc="/quran4.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
        <Card
          card="Daily Quranic Reflection"
          disc="Join our interactive online Quran classes. Learn Tajweed, Tafsir, and Quranic studies from qualified teachers at your convenience, no matter where you are."
          imgSrc="/quran5.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
        <Card
          card="Learn Quranic Arabic"
          disc="Our academy offers qualified and experienced Quran teachers to help you understand and memorize the Quran. Start your Quran learning journey today!"
          imgSrc="/quran7.jpg"
          first="Learn with zain"
          second="online quran academy"
          third="quran.pk"
        />
      </div>
    </div>
  );
}
