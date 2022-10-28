
import './App.css';
import Nav from './components/Nav';
import Store from './components/store';
import Footer from './components/Footer';



function App() {
 
  return (
    <div className="App">


     <Nav/>
     <div className='Card'>
     <Store Name = "معسكر تطبيقات الويب للناشئين" Description = "يهدف المعسكر إلى تطوير الناشئ في مجال تطبيقات الويب باستخدام لغة JavaScript بدايةً من تعلم أساسيات تطبيقات الويب إلى أن يصل إلى بناء مشروع"Expiry = "20"Img ="https://files.bootcamp.sa/8fb8a053-432d-40a1-8179-176051ca23c4/logo/053d6071-e12e-4e92-9b9d-038c966b6c8c.png"/>
     <Store Name = "تطوير تطبيقات iOS باستخدام SwiftUI"Description="برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،"Expiry="10"Img="https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png"/>
     <Store Name = "دورة تصميم المواقع بمنهجية No-Code"Description="نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة."Expiry="20" Img ="https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" />
     <Store Name = "معسكر Python البرمجي للناشئين"Description="معسكر يهدف إلى إيصال مفهوم الأنظمة الرقمية وأنواع لغات البرمجة وأهميتها والتى تمكن الناشئ من بناء برامج بسيطة داخل برنامج Python"Expiry="24"Img="https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/b8497526-2eb3-4e79-a8ad-a0a006816623.png"/>
     <Store Name = "دورة ITIL لإدارة خدمات تقنية المعلومات"Description="نستهدف في هذه الدورة المهتمين بتعلم مفاهيم ITIL 4 من خلال تزويدهم بعدد من المفاهيم والتطبيقات العملية المختصة بخدمات تقنية المعلومات."Expiry="10"Img="https://files.bootcamp.sa/99565bbd-9d6b-4270-a60e-f6405ef928a2/logo/16f98694-88fb-42cb-bdbb-69f31149b0d6.png"/>
     <Store Name = "معسكر تطوير الألعاب باستخدام Unity للناشئين"Description="يهدف معسكر تطوير الألعاب باستخدام محرك الألعاب Unity ولغة البرمجة #C إلى تمكين المتدرب ابتداءً من المهارات الأساسية إلى تطوير وبرمجة الألعاب بشكل كامل"Expiry="11"Img="https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/f8d7a8e5-a77c-4dd8-b9d4-1324bdc52cb8.jpeg"/>
     </div>
     <Footer/>
    
    </div>
  );
}

export default App;
