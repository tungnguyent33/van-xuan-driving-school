type JsonLdProps = {
  data: object;
};

/** Render một khối schema.org JSON-LD (`<script type="application/ld+json">`). */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
