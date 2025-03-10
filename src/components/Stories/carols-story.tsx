import ServicesSection from "../Services/services-section";

export default function CarolsStory() {
  const body = (
    <>
      <p className="mx-10 my-6 text-center text-lg">
        Carol was a resident at our Starick House Refuge. We have changed her
        name to protect her identity.
      </p>
      <br />
      <p>
        Carol and her two children escaped her ex-husband, who was very violent
        towards her and their children.
      </p>
      <br />
      <p>
        She arrived at our Starick House Refuge shy, distraught and upset, but
        quickly came out of her shell, and grew in confidence as she was no
        longer forced to live in the violent and abusive environment.
      </p>
      <br />
      <p>
        The children were courageous and strong, and showed resilience in
        settling into their new environment.
      </p>
      <br />
      <p>
        Inevitably, they were also sleeping well and doing much better at school
        after leaving the family home.
      </p>
      <br />
      <p>
        With support from Starick staff, Carol’s next step is to create a future
        free from violence for herself and her children. She is keen to
        rediscover the independence stolen from her, get a job, move into her
        own home and, in her own words, “never look back!”
      </p>
      <br />
      <p>Here’s what she said about her experience at Starick House:</p>
    </>
  );
  return (
    <ServicesSection
      titleTextColour="starick-white"
      titleBackgroundColour="starick-green"
      sectionBody={body}
      title="Carol's Story"
      textOnLeft={false}
    />
  );
}
