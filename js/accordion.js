export default function accordion() {
   const featureLinkElems = document.querySelectorAll(".feature__link");
   const featureSubElems = document.querySelectorAll(".feature-sub");

   featureLinkElems.forEach((btn, index) => {
      btn.addEventListener('click', () => {
         if (btn.classList.contains('feature__link_active')) {
            btn.classList.remove('feature__link_active');
            featureSubElems[index].classList.add('hidden');
         } else {
            featureSubElems.forEach((featureSubElem) => {
               featureSubElem.classList.add('hidden');
            });

            featureLinkElems.forEach((featureLinkElem) => {
               featureLinkElem.classList.remove('feature__link_active');
            });

            btn.classList.add('feature__link_active');
            featureSubElems[index].classList.remove('hidden');
         }
      });
   });
}

// Второй вариант решения
//    featureLinkElems.forEach((btn, index) => {
//       btn.addEventListener("click", () => {

//          featureSubElems.forEach((featureSubElem, i) => {
//             if (index === i) {
//                featureSubElems[index].classList.toggle("hidden");
//             } else {
//                featureSubElem.classList.add("hidden");
//             }
//          });

//          featureLinkElems.forEach((featureLinkElem) => {
//             if (featureLinkElem === btn) {
//                btn.classList.toggle("feature__link_active");
//             } else {
//                featureLinkElem.classList.remove("feature__link_active");
//             }
//          });
//       });
//    });