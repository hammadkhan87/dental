import React from "react";
import "./style.scss";
import Pagetitle from "../../components/pagetitle/Pagetitle";
import image from "../../images/trios-Scanner.jpg";
const BlogDentalImplants = () => {
  return (
    <div className="b_implants_main_container">
      <Pagetitle
        title={"Dental Implants and its advantages. Digitally Guided surgery"}
        fontsize={45}
      />
      <div className="b_implants_imge">
        <img src={image} alt="" width={"100%"} height={"100%"} />
      </div>
      <div className="b_implants_details">
        <p className="b_title_text">
          Dental Implants and its advantages. Digitally Guided surgery
        </p>
        <p className="b_detail_text">
          Digitally guided surgical procedure was originally introduced for
          neurosurgery. Using this advanced procedure, dentists can now achieve
          safe and predictable implant replacements. It is gaining popularity
          with time across the globe. This form of surgical procedure uses
          images taken from the CT scan cone beam of the patient to plan
          accurate implant treatment. Using guided surgery software, it becomes
          easier to visualize as well as manipulate the patient’s surrounding
          tissue and jawbone images. Thus, accurate approach can be taken to
          provide the treatment. CT cone beam images show soft tissue thickness,
          available bone, adjacent teeth proximity, root anatomy and vital
          structures.
          <br /><br/>
         <b> <i>Main benefits derived from using laser guided implant surgery</i></b> <br/>It
          includes accurate and precise implant placement. Vital anatomical
          structures can now be visualized effortlessly and clearly, thus
          allowing the dentists to preserve them better during guided surgery.
          On the other hand traditional surgical guides offer predictable
          results as they are quite trickier to use, if there is absent
          anatomical references. Advance detailed treatment planning can help
          eliminate or reduce expected events taking place during surgery. It
          also helps reduce substantially the time taken to complete the implant
          surgery.<br/><br/> <b> <i>Any drawbacks</i> </b><br/>Initial investment cost required buying
          planning software and specialised surgical equipment is one of the
          major drawbacks. It also requires adequate time to get trained in this
          speciality. Patients find laser-guided implant surgery to be quicker
          and comfortable. But clinicians are required to spend a lot of time
          trying to plan this surgery unlike that of traditional implants
          treatments. With the technology being more accepted and less costly,
          it is gaining importance.<br/><br/><b><i> When is laser-guided implant surgery
          prescribed to patients? </i></b><br/>Certain situations might demand using
          laser-guided implant surgical procedure. If patient requires
          sequential placement of 3+ implants, then this treatment option is
          recommended. It is also beneficial if implant placements are crucial
          to achieve success of proposed restoration. Patients suffering from
          bone volume or structure or need significant bony anatomy alteration
          can benefit from this procedure. It also reduces problems arising from
          proximity of adjacent teeth or existing implants. Patients requiring
          immediate extraction or completely edentulous, followed by implant
          placements immediately are suitable to undergo this treatment.<br/><br/>
          However, guided implant surgery will not be necessary to treat all
          situations. The dentist may be routinely placing implants freehand
          with great success without using guided surgery.<br/><br/><b><i> Achieve desirable
          outcome with laser guided implant surgery</i></b><br/> Increasing implant placement
          accuracy is one of the major reasons to select guided implant surgical
          procedure. Clinicians can now plan exact position and morphology of
          planned restorations. This is achievable before placing/positioning
          implants, thereby creating an ideal treatment plan. More accurate
          placements of implants can be achieved with reverse engineering
          implant surgical procedure. This ensures avoiding vital anatomical
          structures. The computerized software allows complete visualization of
          the anatomy that surrounds the implant locations. At the same time, it
          ensures proper placement of the implant in its ideal position. With
          digital planning implant surgical procedure, the dental team will be
          in a better position to visualize as well as approve treatment plan.
          It also includes the final prosthesis.
        </p>
      </div>
    </div>
  );
};

export default BlogDentalImplants;
