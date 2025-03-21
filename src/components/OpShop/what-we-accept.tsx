import Section from "../Services/services-section";
import { List } from "../Services/list";

export default function WhatWeAccept() {
  const acceptedItems = [
    "Babies/Children’s clothing",
    "Girls/Women’s clothing",
    "Boy’s/Men’s clothing",
    "Sleepwear",
    "Vintage Clothing",
    "Shoes",
    "Manchester",
    "Kitchenware",
    "Curtaining",
    "Towelling",
    "Handbags",
    "Hats",
    "Accessories",
    "Toys and board games",
    "CD's/DVD's",
    "Digital device games",
    "Books for adults and children",
    "Collectables"
  ];
  const halfIndex = Math.floor(acceptedItems.length / 2);
  const body = (
    <>
      <p>
        We accept a full range of new and used clothing and small homewares.
        These goods are sold in the op shop to raise funds for our work with
        women and children escaping family and domestic violence.
      </p>
      <br />
      <p>
        Please note we will accept{" "}
        <span className="font-bold">
          only items that are clean and in good condition:
        </span>
      </p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {[0, 1].map((num) => (
          <List
            key={num}
            items={acceptedItems.slice(
              num * halfIndex,
              (num + 1) * halfIndex + num
            )}
            style="list-disc"
          />
        ))}
      </div>
      <br />
      <p>
        Please clean and fold all clothing, and ensure household and other goods
        are clean and in good working order.
      </p>
      <br />
      <p>
        Please note that we do not allow direct delivery of donations to the
        refuges. We ask you to respect this policy, which is for security
        reasons and because we wish to assess and sort all donations through our
        Cloverdale op shop before making goods available to our clients.
      </p>
      <br />
      <p>
        Once your donation is sorted by our volunteers, we will check in with
        the refuges and then deliver any suitable items.
      </p>
      <br />
      <p>
        On an as-needs basis, our refuge and outreach clients receive vouchers
        from us and can select their own items from the op shop.
      </p>
    </>
  );
  return (
    <Section
      sectionBody={body}
      title="What We Accept"
      titleBackgroundColour="starick-green"
      titleTextColour="starick-white"
      textOnLeft={false}
    />
  );
}
