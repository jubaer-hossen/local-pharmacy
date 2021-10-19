import React from 'react';
import './Outstanding.css';
import img1 from '../../img-svg/stethoscope-solid.svg';
import img2 from '../../img-svg/credit-card-regular.svg';
import img3 from '../../img-svg/user-solid.svg';
const Outstanding = () => {
    return (
        <div className="container my-5">
            <div className="text-center">
                <h4 className="text-secondary">WE CARE ABOUT PATIENT</h4>
                <h2>OUR OUTSTANDING SERVICES</h2>
            </div>
            <div>
                <div class="row row-cols-1 row-cols-md-1 g-4">
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div className="img-color">
                                <img
                                    src={img1}
                                    class="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Outdoor Checkup</h5>
                                <p class="card-text">
                                    Phosfluorescently simplify scalable supply
                                    chains after performance based content.
                                    Efficiently embrace scalable functionalities
                                    through inexpensive intellectual capital.
                                    Credibly synergize excellent services for
                                    clicks-and-mortar alignments. Holisticly
                                    disseminate bleeding-edge intellectual
                                    capital rather than magnetic benefits.
                                    Authoritatively customize accurate
                                    deliverables whereas e-business solutions..
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div class="card-body">
                                <h5 class="card-title text-center">
                                    Emergency Care
                                </h5>
                                <p class="card-text">
                                    As an Emergency Department, our priority is
                                    to attend to patients with serious illnesses
                                    and injuries. To facilitate this, we will
                                    assess your medical condition at Triage
                                    after you have registered at our
                                    Registration Counter, and sometimes, even
                                    before registration if the situation so
                                    demands. The Emergency Department at SGH is
                                    one of the busiest in the country. There is
                                    a Senior Emergency Physician on duty on
                                    every shift.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={img3}
                                    class="card-img-top img img-thumbnail"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100 d-md-flex align-items-center">
                            <div>
                                <img
                                    src={img2}
                                    class="card-img-top img"
                                    alt="..."
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Operation Theater Service
                                </h5>
                                <p class="card-text">
                                    Gleneagle Hospital's operating rooms feature
                                    modern equipment and are manned by a team of
                                    professional medical staff specialising in
                                    various surgical fields. The facilities are
                                    designed to create a comfortable and secure
                                    environment where both major and minor
                                    surgical operations can be safely performed.
                                    Staff and support personnel are always ready
                                    to assist patients and their families in any
                                    way they can.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outstanding;
