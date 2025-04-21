export default function AboutPBC() {
  return (
    <div className="flex w-full flex-col justify-center text-center">
      <h2>About Pavones Boxing Club</h2>
      <p>
        Pavones Boxing Club was created in 2024 to improve access to fitness
        training, classes and activities including boxing, muay thai, kickboxing,
        weight training, cardio, core, flexibility and much more. In addition, the
        club trainers and coaches offer private training sessions personalized to
        your needs. Pavones Boxing Club is located in Playa Pavones, Costa Rica.
        Nestled in the breath-taking jungles and beaches of the souther pacific zone
        of Costa Rica, it's no wonder that people travel from all over the world to
        surf in Pavones and train at Pavones Boxing Club.
      </p>
      {/* <div className="flex w-full justify-center p-4"> */}
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
    </div>
  )
}
