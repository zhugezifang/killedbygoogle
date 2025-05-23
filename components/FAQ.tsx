import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FAQContainer = styled.div(() => css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
}));

const FAQTitle = styled.h2(() => css({
  marginBottom: '20px',
}));

const FAQItem = styled.div(() => css({
  marginBottom: '15px',
  paddingBottom: '15px',
  borderBottom: '1px solid #eee',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const FAQQuestion = styled.h3(() => css({
  color: '#1a73e8',
  margin: '0 0 8px 0',
  fontSize: '1.1em',
}));

const FAQAnswer = styled.p(() => css({
  margin: 0,
  lineHeight: 1.5,
  color: '#fff',
  fontSize: '0.95em',
}));

const FAQ = () => (
  <FAQContainer>
    <FAQTitle>Google Services FAQ</FAQTitle>

    <FAQItem>
      <FAQQuestion>What is Killed by Google?</FAQQuestion>
      <FAQAnswer>Killed by Google is a list and website that tracks all the products and services that Google has shut down or discontinued over the years. It shows both apps and hardware that are no longer available to users. This can include anything from popular apps like Google Play Music to devices like Google Clips.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>Why does Google discontinue products?</FAQQuestion>
      <FAQAnswer>Google may discontinue a product for many reasons, including low user interest, high operational costs, or the desire to focus on newer technology. Sometimes it&apos;s because a similar product exists that provides better solutions or has more features.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>How can I find out which services are no longer available?</FAQQuestion>
      <FAQAnswer>You can visit the Killed by Google website to get a comprehensive list of discontinued services. The website categorizes products by type, such as applications or devices, and will show when they were launched and shut down.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>What was Google Jamboard?</FAQQuestion>
      <FAQAnswer>Google Jamboard was a digital whiteboard application that allowed users to create and collaborate in real time. Even though it had many useful features, it was discontinued in 2024 after being available for about 8 years.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>Is there any way to recover data from shut down services?</FAQQuestion>
      <FAQAnswer>Most of the time, if a Google service is shut down, the data associated with that service is also deleted. However, it&apos;s always a good practice to backup your data regularly, especially if you use apps that are not widely supported.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>What happened to Google Play Music?</FAQQuestion>
      <FAQAnswer>Google Play Music was a music and podcast streaming service that allowed users to store and listen to their music. It was discontinued after about 9 years of service and replaced by YouTube Music, which offers similar features.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>What is the lifespan of Google services?</FAQQuestion>
      <FAQAnswer>The lifespan of Google services varies greatly, with some lasting just a few months while others operate for several years. The direction of technology and user needs typically influences how long a service remains viable.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>Can I still use services that are marked as killed on this website?</FAQQuestion>
      <FAQAnswer>No, once a service is marked as killed, it means it is no longer available for use. Google will not offer support or access to these discontinued products, so users are encouraged to look for alternatives.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>How often is the Killed by Google site updated?</FAQQuestion>
      <FAQAnswer>The Killed by Google site is frequently updated whenever there is a new service or product discontinued by Google. Stay tuned to the website for the latest information.</FAQAnswer>
    </FAQItem>

    <FAQItem>
      <FAQQuestion>What can I do to keep track of Google&apos;s active services?</FAQQuestion>
      <FAQAnswer>To keep track of Google&apos;s active services, regularly visiting their official blog or support page can help. Checking tech news sites can also keep you informed about new launches or discontinuations.</FAQAnswer>
    </FAQItem>
  </FAQContainer>
);

export default FAQ;