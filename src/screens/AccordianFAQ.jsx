import React from "react";  
import {  
  Accordion,  
  AccordionContent,  
  AccordionItem,  
  AccordionTrigger,  
} from "../components/ui/accordion";  

export const AccordianFAQ = () => {  
  const faqItems = [  
    {  
      question: "Are DocuTech signatures legally binding?",  
      answer:  
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",  
    },  
    {  
      question: "Are DocuTech signatures legally binding?",  
      answer: "",  
    },  
    {  
      question: "Are DocuTech signatures legally binding?",  
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",  
    },  
    {  
      question: "Are DocuTech signatures legally binding?",  
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",  
    },  
  ];  

  return (  
    <section className="container mx-auto px-4 py-1 max-w-[1235px]">  
      <h2 className="text-3xl font-bold text-neutral-800 text-center mb-7">  
        FAQs  
      </h2>  

      <Accordion type="single" collapsible>  
        {faqItems.map((item, index) => (  
          <AccordionItem  
            key={index}  
            value={`item-${index}`}  
            className="mb-4 rounded-[4.91px] shadow-[0px_24.56px_32.74px_-14.73px_#94949440]"  
          >  
            <AccordionTrigger className="px-6 py-8 bg-[#d37f36] text-xl font-bold text-neutral-800/90 hover:no-underline">  
              {item.question}  
            </AccordionTrigger>  
            {item.answer && (  
              <AccordionContent className="pl-16 pr-6 pt-6 pb-9 bg-[#f1d4bb] text-xl font-bold text-neutral-800/90">  
                {item.answer}  
              </AccordionContent>  
            )}  
          </AccordionItem>  
        ))}  
      </Accordion>  
    </section>  
  );  
};