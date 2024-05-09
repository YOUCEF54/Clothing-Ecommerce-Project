import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n
.use(LanguageDetector)
.use(initReactI18next).init({
    debug:true,
    fallbackLng: "ar",
    returnObjects:true,
    resources: {
        en:{
            translation:{
                hero:{
                    title:"Welcom to your shopping clothes store.",
                    para: "Discover the essence of style with our curated collection. From timeless classics to contemporary trends, find your perfect look at our store. Welcome to a world where you're the hero of your fashion story.",
                    btn:"Shop Now!"
                }
            }
        },
        ar:{
            translation:{
                hero:{
                    title:"مرحبا بكم في متجر لبيع الملابس الخاصة بك.",
                    para: "اكتشف جوهر الأسلوب من خلال مجموعتنا المنسقة. من الكلاسيكيات الخالدة إلى الاتجاهات المعاصرة، ابحث عن مظهرك المثالي في متجرنا. مرحبًا بك في عالم أنت فيه بطل قصة الموضة الخاصة بك.",
                    btn:"!تسوق الآن"
                }
        }
        },
        fr:{
            translation:{
                hero:{
                    title:"Bienvenue dans votre magasin de vêtements shopping.",
                    para: "Découvrez l'essence du style avec notre collection organisée. Des classiques intemporels aux tendances contemporaines, trouvez votre look parfait dans notre boutique. Bienvenue dans un monde où vous êtes le héros de votre histoire de mode.",
                    btn:"Achetez maintenant!"
                }
            }
        },
        es:{
            translation:{
                hero:{
                    title:"Bienvenido a tu tienda de ropa de compras.",
                    para: "Descubra la esencia del estilo con nuestra colección seleccionada. Desde clásicos atemporales hasta tendencias contemporáneas, encuentre su look perfecto en nuestra tienda. Bienvenido a un mundo donde eres el héroe de tu historia de la moda.",
                    btn:"Compra ahora!"
                }
            }
        }
    } 
})