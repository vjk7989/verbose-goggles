import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import LogoColouredLandscape from '../../assets/images/LogoColouredLandscape.png';
import LogoWhiteLandscape from '../../assets/images/LogoWhiteLandscape.png';
import Zenlogo from '../../assets/images/zenlogo.png'
import Workspace from '../../assets/images/workspace.png'
import '../../styles/pages/LandingPage.scss';

const LandingPage = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/auth/login');
    }

    return (
        <div className='landingPage'>
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease-in-quart"
                data-easing2="ease-out-quart" role="banner" className="navbar w-nav">
                <div className="container nav w-container">
                    <div className="logo-wrapper"><img
                        src={Zenlogo}
                        loading="lazy" width="140" height="70"alt="Great Minds Logo" className="w-[20px] h-[100px] object-contain" /></div>
                    <div className="nav-wrapper">
                        <nav role="navigation" glass="2" className="nav-menu w-nav-menu">
                            <a href="#feature"
                                className="nav-link w-inline-block">
                                <div>Features</div>
                            </a>

                            <a href="#Benefits" className="nav-link w-inline-block">
                                <div>Benefits</div></a>
                            <a href="#EAP" className="nav-link w-inline-block">
                                <div>EAP</div></a>
                        </nav>

                        <a data-w-id="c25a8e20-cb14-d39c-5bae-82075acd46a9" href="#"
                            className="button mobile w-button" onClick={handleNavigation}><span className="free-copy-switch">Sign In</span> </a>
                        <div className="menu-button w-nav-button">
                            <div className="icon w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="top-curves-wrapper">
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0.172, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-background"></div>
                <div style={{ transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="background-curve-fill-block"></div>
                <div style={{ transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(4, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }}
                    className="top-curve-foreground"></div>
            </div>


            <main className="main">
                <header id="Introduction" className="header wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-two introduction">
                            <div className="introduction-headings">
                                <h1 className='heading'>Transforming the Future of Work</h1>
                                <p className="subheading">A revolutionary digital platform dedicated to nurturing your mental health.</p>
                            </div><img
                                src="https://cdni.iconscout.com/illustration/premium/thumb/business-consultation-illustration-download-in-svg-png-gif-file-formats--advice-discussion-talk-meeting-conference-banking-and-finance-office-work-pack-people-illustrations-3832781.png"
                                loading="lazy" id="w-node-_749094cd-3351-73b1-4786-0f89e0b5a528-0862c5d4"
                                alt="Office workers enjoying nature and relaxing" className="introduction-illustration" />
                        </div>
                    </div>
                </header>

                <section id="MHFA" className="xl-gap wf-section">
                    <div className="container w-container">
                        <div className="w-layout-grid grid-two"><img
                            src="https://img.freepik.com/free-vector/organic-flat-business-people-meditating-illustration_23-2148901189.jpg"
                            loading="lazy" alt="Managing stress during the " />
                            <div>
                                <p className="employee-fontSize"><strong>Navigating Stress in the Workplace</strong></p>
                                <p className='emp-sh'>
                                Did you know? 76% of full-time employees experience at least one symptom of a mental health condition.
                                <br>
                                </br>
                                <br></br>
                                In today's fast-paced world, the pressing socio-economic challenges emphasize the importance of comprehensive mental health solutions accessible to everyone. The impact of the COVID-19 pandemic has led to heightened levels of stress, anxiety, and burnout among employees. By offering robust mental health benefits and supportive resources, we can cultivate a workplace that prioritizes mental well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="feature" className="xl-gap wf-section">
    <div className="container w-container">
        <h2>Your Wellness Journey</h2>
        <div className="w-layout-grid grid-four">
            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                    className="organic-background"></div>
                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                    className="organic-foreground"></div>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/chemistry-teacher-illustration-download-in-svg-png-gif-file-formats--expert-professor-female-school-pack-illustrations-4660062.png?f=webp"
                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
            </div>
            <div>
                <h2>Consult a Wellness Coach</h2>
                <p>Access personalized support and resources through our Employee Assistance Program, designed to help you navigate personal and work-related challenges, including mental health concerns.</p>
            </div>
            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                    className="organic-background tips"></div>
                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                    className="organic-foreground tips"></div>
                <div className="organic tips"></div>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/young-businessman-putting-golden-key-into-bullseye-target-hold-to-unlock-business-success-illustration-download-in-svg-png-gif-file-formats--career-achievement-concept-pack-illustrations-7441957.png"
                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
            </div>
            <div>
                <h2>Set and Track Your Goals</h2>
                <p>Utilize our health tracker to monitor various aspects of your wellness journey, including physical activity, hydration, meditation practices, and heart rate, to stay on top of your well-being.</p>
            </div>
        </div>
    </div>
</section>

<section className="xl-gap wf-section">
    <div className="container w-container">
        <div className="w-layout-grid grid-four">
            <div id="w-node-_5e6b692d-801f-8c96-0952-0b35636ec606-0862c5d4" className="relative organic-wrapper">
                <div data-w-id="c34f6110-7ab3-36b4-dd32-6fe61dbf3389"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                    className="organic-background"></div>
                <div data-w-id="7edbff0e-4c3e-183b-2fbd-66ddb5d69d0f"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                    className="organic-foreground tips"></div>
                <div className="organic tips"></div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/043/728/247/original/family-of-mom-and-dad-and-teenage-children-smiling-at-screen-for-avatars-or-profile-photos-in-web-design-people-of-different-ages-from-one-family-are-dressed-in-casual-clothes-or-feel-good-mood-png.png"
                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
            </div>
            <div>
                <h2>Monitor Your Mood with Ease</h2>
                <p>Engage with our thoughtfully crafted questionnaires that help you assess various aspects of your mental health, including mood fluctuations, anxiety, and stress levels.</p>
            </div>
            <div id="w-node-_14eda021-b872-0191-e91a-ec9c158f5fd5-0862c5d4" className="relative organic-wrapper">
                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd6"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" }}
                    className="organic-background tips"></div>
                <div data-w-id="14eda021-b872-0191-e91a-ec9c158f5fd7"
                    style={{ transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(50deg) skew(0, 0)" }}
                    className="organic-foreground tips"></div>
                <div className="organic tips"></div>
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/girl-handling-with-anxiety-illustration-download-in-svg-png-gif-file-formats--management-techniques-coping-stress-relief-relax-pack-people-illustrations-9365960.png?f=webp"
                    loading="lazy" width="238" alt="Wellness Tips Illustration" className="wb-tips-illustration" />
            </div>
            <div>
                <h2>Engage in Relaxation Techniques</h2>
                <p>Incorporating relaxing activities into your daily routine is essential for mental well-being. Whether it's reading, meditating, or listening to soothing music, find what works for you and embrace it.</p>
            </div>
        </div>

        <br /><p style={{ textAlign: "right" }}>and so much more...</p>
    </div>
</section>


<section id="Benefits" className="xl-gap wf-section">
    <div className="container w-container">
        <h2>All-in-one solution for your employees</h2>
        <div className="w-layout-grid grid-three">
            <div className="feature-wrapper">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/mental-health-illustration-download-in-svg-png-gif-file-formats--clinician-psychotherapy-person-doctor-pack-healthcare-medical-illustrations-3016790.png?f=webp"
                    loading="lazy" width="180" height="120" alt="Improved Mental Health" />
                <h3>Improved Mental Health</h3>
                <p>Zensphere offers self-assessment tools and access to mental health resources and support providers to enhance users' mental health.</p>
            </div>
            <div className="feature-wrapper">
                <img
                    src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-vector-business-concept-illustration-of-goal-setting-picture-image_8390332.png"
                    loading="lazy" width="120" height="120" alt="Achieve Health Goals" />
                <h3>Achieve Health Goals and Track Progress</h3>
                <p>Zensphere improves mental health by promoting targeted change strategies, self-care goals, reminders, and progress tracking through an interactive dashboard.</p>
            </div>
            <div className="feature-wrapper">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/competition-winner-with-trophy-illustration-download-in-svg-png-gif-file-formats--female-winning-young-woman-pack-sports-games-illustrations-9891069.png?f=webp"
                    loading="lazy" width="120" height="120" alt="Encourages Healthy Competition" />
                <h3>Encourages Healthy Competition</h3>
                <p>The leaderboard is an effective way to track progress, set goals, and promote a culture of support and accountability for employees' mental health.</p>
            </div>
            <div className="feature-wrapper">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/self-awareness-illustration-download-in-svg-png-gif-file-formats--psychological-state-acceptance-behavior-determination-business-pack-illustrations-7016249.png?f=webp"
                    loading="lazy" width="120" height="120" alt="Increase Self-Awareness" />
                <h3>Increase Self-Awareness</h3>
                <p>Individuals can monitor their own behaviors, become more self-aware, and feel empowered to seek medical attention as they recognize negative trends.</p>
            </div>
            <div className="feature-wrapper">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3142/3142534.png"
                    loading="lazy" width="120" height="120" alt="Prevents Burnout" />
                <h3>Prevents Burnout</h3>
                <p>By taking breaks and participating in engaging activities like meditation and exercise, users can avoid burnout and maintain a peaceful state of mind.</p>
            </div>
            <div className="feature-wrapper">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4861/4861566.png"
                    loading="lazy" width="120" height="120" alt="Increased Access to Resources" />
                <h3>Increased Access to Mental Health Resources</h3>
                <p>Zensphere provides convenient and accessible resources to support mental health, including self-help tools, articles, and guided meditations.</p>
            </div>
        </div>
    </div>
</section>

<section id="EAP" className="relative xxl-gap wf-section">
    <div className="container w-container">
        <h2>Expand your EAP with Zensphere</h2>
        <p>Employee Assistance Programs (EAPs) are an essential component of many organizations' benefits packages, providing employees with access to resources and support for a range of personal and work-related issues. Zensphere is a digital mental health platform that offers online therapy and counseling services to individuals and organizations. The application provides a range of benefits that can complement and expand on existing EAP services.<br /><br />
        — <span className="cite">Zensphere for Employee Assistance Programs</span></p>
    </div>
</section>

            </main>

            <footer className="footer wf-section">
  

    <div className="container footer w-container">
            
        <h2>
            <img
                src={Zenlogo} // Ensure Zenlogo is defined/imported correctly
                loading="lazy" 
                alt="Zensphere Logo" 
                className="footer-logo"
            />
        </h2>
        <div className="w-layout-grid grid-three">
            <div>
                <div>Zensphere Team</div>
                <div>• Krishna</div>
                <div>• Ishika Paliwal</div>
                <div>• Drakshi Chopra</div>
            </div>

            <div>
                <a href="tel:(+91) 7999756630" className="footer-link">(+91) 7999756630</a>
                <a href="mailto:hello@zensphere.com" className="footer-link">hello@zensphere.com</a>
            </div>
            <div>© 2024 Zensphere<br />India, India</div>
        </div>
    </div>
</footer>

        </div>
    );
}

export default LandingPage;