const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 style={{ marginBottom: '20px' }}>Google Services FAQ</h2>

      <div className="faq-item">
        <h3>What is 'Killed by Google'?</h3>
        <p>Killed by Google is a list and website that tracks all the products and services that Google has shut down or discontinued over the years. It shows both apps and hardware that are no longer available to users. This can include anything from popular apps like Google Play Music to devices like Google Clips.</p>
      </div>

      <div className="faq-item">
        <h3>Why does Google discontinue products?</h3>
        <p>Google may discontinue a product for many reasons, including low user interest, high operational costs, or the desire to focus on newer technology. Sometimes it's because a similar product exists that provides better solutions or has more features.</p>
      </div>

      <div className="faq-item">
        <h3>How can I find out which services are no longer available?</h3>
        <p>You can visit the Killed by Google website to get a comprehensive list of discontinued services. The website categorizes products by type, such as applications or devices, and will show when they were launched and shut down.</p>
      </div>

      <div className="faq-item">
        <h3>What was Google Jamboard?</h3>
        <p>Google Jamboard was a digital whiteboard application that allowed users to create and collaborate in real time. Even though it had many useful features, it was discontinued in 2024 after being available for about 8 years.</p>
      </div>

      <div className="faq-item">
        <h3>Is there any way to recover data from shut down services?</h3>
        <p>Most of the time, if a Google service is shut down, the data associated with that service is also deleted. However, it's always a good practice to backup your data regularly, especially if you use apps that are not widely supported.</p>
      </div>

      <div className="faq-item">
        <h3>What happened to Google Play Music?</h3>
        <p>Google Play Music was a music and podcast streaming service that allowed users to store and listen to their music. It was discontinued after about 9 years of service and replaced by YouTube Music, which offers similar features.</p>
      </div>

      <div className="faq-item">
        <h3>What is the lifespan of Google services?</h3>
        <p>The lifespan of Google services varies greatly, with some lasting just a few months while others operate for several years. The direction of technology and user needs typically influences how long a service remains viable.</p>
      </div>

      <div className="faq-item">
        <h3>Can I still use services that are marked as 'killed' on this website?</h3>
        <p>No, once a service is marked as 'killed', it means it is no longer available for use. Google will not offer support or access to these discontinued products, so users are encouraged to look for alternatives.</p>
      </div>

      <div className="faq-item">
        <h3>How often is the Killed by Google site updated?</h3>
        <p>The Killed by Google site is frequently updated whenever there is a new service or product discontinued by Google. Stay tuned to the website for the latest information.</p>
      </div>

      <div className="faq-item">
        <h3>What can I do to keep track of Google's active services?</h3>
        <p>To keep track of Google's active services, regularly visiting their official blog or support page can help. Checking tech news sites can also keep you informed about new launches or discontinuations.</p>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .faq-item {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-item h3 {
          color: #1a73e8;
          margin: 0 0 8px 0;
          font-size: 1.1em;
        }

        .faq-item p {
          margin: 0;
          line-height: 1.5;
          color: #444;
          font-size: 0.95em;
        }
      `}</style>
    </div>
  );
};

export default FAQ;