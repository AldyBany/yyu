
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";

function ProductImage({ id, onExpand }) {
  return (
    <div class="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
    <p class="group-hover:text-gray">John Smith</p>
    <p class="group-hover:text-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptatibus.</p>
</div>
  );
}

export default function T() {
  const [productIds, setProductIds] = useState([238, 239, 240]);
  const [primaryProduct, setPrimaryProduct] = useState(237);

  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <main className="primary-container">
          <AnimatePresence>
            <motion.img
              key={primaryProduct}
              className="primary-product-image"
              src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
              alt=""
              layoutId={`product-${primaryProduct}`}
            />
          </AnimatePresence>
        </main>
        <aside className="product-gallery">
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </AnimateSharedLayout>
    </div>
  );
}
