export default function MapIframe() {
  return (
    <div className="iframe-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15788.548421951402!2d-83.14807097241403!3d8.388172916395916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa4f6442aa70e73%3A0xfe8a4e1a3341ddf2!2sPlaya%20Pavones!5e0!3m2!1sen!2sus!4v1741111601083!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
