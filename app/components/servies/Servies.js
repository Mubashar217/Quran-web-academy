import React from "react";
import Card2 from "./../card2/Card2";

function Servies(props) {
  return (
    <div className="servies">
      <p className="font-bold text-2xl text-center">OUR SERVICES</p>
      <br />
      <p className="font-bold text-5xl text-center">
        Quran For All Academy Services
      </p>
      <br />
      <p className="text-center">
        Join our interactive online Quran classes. Learn Tajweed, Tafsir, and
        Quranic studies from qualified teachers at your convenience, no matter
        where you are.
      </p>
      <br />
      <p className="text-center"> Join our interactive online Quran classes.</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4grid lg-cols-4 p-25 lg:gap-3 md:gap-3">
        <Card2
          imgSrc2="/26.png"
          title2="Live Quran Classes"
          disc2="These academies offer live sessions with qualified teachers who help students learn how to read and understand the Quran. Classes can be one-on-one or in small groups."
          btnname="apply now"
        />
        <Card2
          imgSrc2="/quran5.jpg"
          title2="Quran Memorization"
          disc2="Online Quran academies provide programs that focus on helping students memorize the Quran (Hifz). Teachers guide students through systematic memorization techniques and revision."
          btnname="apply now"
        />
        <Card2
          imgSrc2="/quran6.jpg"
          title2="Quran Tafseer (Exegesis)"
          disc2="This service helps students understand the deeper meanings of the Quran. It includes detailed explanations of the verses, background, and context, allowing for a more profound comprehension of the text."
          btnname="apply now"
        />
        <Card2
          imgSrc2="/quran2.jpg"
          title2="Quranic Arabic"
          disc2="Many academies offer courses on learning Quranic Arabic. This helps students understand the original language of the Quran and aids in better interpretation and pronunciation."
          btnname="apply now"
        />
        <Card2
          imgSrc2="/quran3.jpg"
          title2="Quranic Recitation (Tajweed)"
          disc2="Academies provide Tajweed courses that focus on the proper pronunciation and rules of reciting the Quran. This ensures students recite the Quran in the correct way."
          btnname="apply now"
        />
        <Card2
          imgSrc2="/quran4.jpg"
          title2="Quran for Kids"
          disc2="Specialized courses for children are available, which make learning fun and interactive. These courses often include Quran reading, memorization, and learning basic Islamic principles in an engaging manner."
          btnname="apply now"
        />
      </div>
    </div>
  );
}

export default Servies;
