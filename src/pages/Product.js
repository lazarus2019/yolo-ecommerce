import { useParams } from "react-router";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import Section, { SectionBody, SectionTitle } from "../components/Section";


function Product() {
  const params = useParams();

  const product = productData.getProductBySlug(params.slug);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Product;
