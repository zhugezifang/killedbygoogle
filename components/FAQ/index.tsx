const FAQ = () => {
  // 定义公共样式对象
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    item: {
      marginBottom: '15px',
      paddingBottom: '15px',
      borderBottom: '1px solid #eee'
    },
    title: {
      color: '#1a73e8',
      margin: '0 0 8px 0',
      fontSize: '1.1em'
    },
    content: {
      margin: 0,
      lineHeight: 1.5,
      color: '#444',
      fontSize: '0.95em'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Killed By Google FAQ</h2>

      {/* FAQ Items */}
      <div style={styles.item}>
        <h3 style={styles.title}>What is 'Killed by Google'?</h3>
        <p style={styles.content}>
          Killed by Google is a list and website that tracks all the products and services that Google has shut down or discontinued over the years. 
          It shows both apps and hardware that are no longer available to users. This can include anything from popular apps like Google Play Music 
          to devices like Google Clips.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>Why does Google discontinue products?</h3>
        <p style={styles.content}>
          Google may discontinue a product for many reasons, including low user interest, high operational costs, 
          or the desire to focus on newer technology. Sometimes it's because a similar product exists that provides 
          better solutions or has more features.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>How can I find out which services are no longer available?</h3>
        <p style={styles.content}>
          You can visit the Killed by Google website to get a comprehensive list of discontinued services. 
          The website categorizes products by type, such as applications or devices, and will show when they 
          were launched and shut down.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>What was Google Jamboard?</h3>
        <p style={styles.content}>
          Google Jamboard was a digital whiteboard application that allowed users to create and collaborate 
          in real time. Even though it had many useful features, it was discontinued in 2024 after being 
          available for about 8 years.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>Is there any way to recover data from shut down services?</h3>
        <p style={styles.content}>
          Most of the time, if a Google service is shut down, the data associated with that service is also deleted. 
          However, it's always a good practice to backup your data regularly, especially if you use apps that are 
          not widely supported.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>What happened to Google Play Music?</h3>
        <p style={styles.content}>
          Google Play Music was a music and podcast streaming service that allowed users to store and listen to their music. 
          It was discontinued after about 9 years of service and replaced by YouTube Music, which offers similar features.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>What is the lifespan of Google services?</h3>
        <p style={styles.content}>
          The lifespan of Google services varies greatly, with some lasting just a few months while others operate for several years. 
          The direction of technology and user needs typically influences how long a service remains viable.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>Can I still use services that are marked as 'killed' on this website?</h3>
        <p style={styles.content}>
          No, once a service is marked as 'killed', it means it is no longer available for use. Google will not offer support 
          or access to these discontinued products, so users are encouraged to look for alternatives.
        </p>
      </div>

      <div style={styles.item}>
        <h3 style={styles.title}>How often is the Killed by Google site updated?</h3>
        <p style={styles.content}>
          The Killed by Google site is frequently updated whenever there is a new service or product discontinued by Google. 
          Stay tuned to the website for the latest information.
        </p>
      </div>

      {/* 最后一个项目移除底部边框 */}
      <div style={{ ...styles.item, borderBottom: 'none' }}>
        <h3 style={styles.title}>What can I do to keep track of Google's active services?</h3>
        <p style={styles.content}>
          To keep track of Google's active services, regularly visiting their official blog or support page can help. 
          Checking tech news sites can also keep you informed about new launches or discontinuations.
        </p>
      </div>
    </div>
  );
};

export default FAQ;