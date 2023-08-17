import React from "react";
import "../blog_dental_implant/style.scss";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import image from "../../images/GSD-Blog-Mouth-Breathing.jpg";
const BlogMouthBreathing = () => {
  return (
    <div className="b_implants_main_container">
      <Pagetitle
        title={"Mouth breathing and effects of Dental health"}
        fontsize={45}
      />
      <div className="b_implants_imge">
        <img src={image} alt="" width={"100%"} height={"100%"} />
      </div>
      <div className="b_implants_details">
        <p className="b_title_text">
          Mouth breathing and effects of Dental health
        </p>
        <p className="b_detail_text" style={{marginBottom:"0px"}}>
          Brushing and flossing regularly ensures having a healthy mouth. But
          there are a few important things to do and avoid. Following them will
          help your smile to be in tip-top shape. Mouth breathing is something
          that you should avoid doing. Although an ordinary involuntary act, it
          does impact negatively dental health. It might be essential during
          strenuous exercise or while experiencing nasal congestion. If you
          breathe all the time through our mouth, then it may result in
          contracting various types of oral health issues. Mouth breathing in
          children can cause crooked teeth and facial deformities. Adults may
          experience gum disease and bad breath.
          <br />
          <br />
          <b>
            <i>Reasons for mouth breathing</i>
          </b>
          <br />
          Mouth breathing might be due to some underlying issue present in the
          nasal passage. One major reason for people to mouth breathe is CNO
          (Chronic Nasal Obstruction). At times, oxygen might not be available
          in the lungs in sufficient amounts through the nose. In such a case,
          you may resort breathing through your mouth.
          <br />
          This is not good as you might contract some serious and harmful oral
          health concerns. Breathing through your mouth dries it out, thus
          leading to reduction in saliva amount created. Saliva is crucial to
          eliminating harmful bacteria as well as neutralizing acids in your
          mouth. If there is not experienced sufficient production of saliva,
          then there can be tooth decay along with other health problems.
          <br />
          <br />
          Nasal airway obstruction is considered to be the main reason for mouth
          breathing. Some of the reasons for your nose to get blocked can be:
          <br />
        </p>
        <ul style={{ listStyleType: "disc" }}>
          <li>Tumors</li>
          <li>Jaw size & shape</li>
          <li>Nose shape</li>
          <li>Nasal polyps</li>
          <li>Deviated septum</li>
          <li>Enlarged tonsils</li>
          <li>Enlarged adenoids</li>
          <li>
            Nasal congestion resulting from sinus infection, allergies or cold
          </li>
          <li>
            Habit, anxiety and stress might also cause mouth breathing even if
            there is no obstruction in nose.
          </li>
        </ul>
        <br />
        <p style={{marginBottom:"4%"}}>
          <b>Signs of being a mouth breather</b>
          <br /><br />
          It could be that you are mouth breathing during sleep instead of your
          nose, without realizing this issue. You can check for certain signs
          that might indicate you suffering from this oral problem like: <br />
          <br />
          <ul tyle={{ listStyleType: "disc" }}>
            <li>Dry mouth</li>
            <li>While sleeping, snoring with open mouth</li>
            <li>Chronic bad breath</li>
            <li>Cracked, dry lips</li>
            <li>Brain fog</li>
            <li>Frequent cavities</li>
            <li>Large tonsils</li>
            <li>Chronic fatigue</li>
            <li>Crowded teeth</li>
            <li>Daytime sleepiness</li>
            <li>Increased airway inflections like colds, ear, sinus, etc.</li>
          </ul>
          <br />
          You should immediately consult a good dentist if you experience any of
          the above-mentioned symptoms. <br />
          <br />
          <b>
            <i>Treatment</i>
          </b>
          <br /><br />
          Treatment offered to cure this issue is based on the type of issue
          that you are experiencing currently. Nasal sprays, prescription
          steroid, anti-histamines and nasal decongestants are recommended to
          improve breathing if the cause is cold or allergy. Tonsils and swollen
          adenoids are removed surgically to treat mouth breathing. If sleep
          apnea is the reason, then you will be prescribed to wear a face mask
          appliance at night referred to as CPAP (continuous positive air
          pressure therapy). It enables your airways to remain open during
          sleep. <br />
          You should also maintain excellent oral hygiene to reduce negative
          effects caused by mouth breathing and schedule routine dental
          checkups. <br />
        </p>
      </div>
    </div>
  );
};

export default BlogMouthBreathing;
