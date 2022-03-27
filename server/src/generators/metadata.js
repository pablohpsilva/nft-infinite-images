const getDefaultMetadata = (hash) => ({
  description: "",
  collection: "",
  image: "",
  name: "",
  nft_name: "",
  external_link: "",
  fee_recipient: "",
  seller_fee_basis_points: 100,
  quantity: 1,
  price: 0.3,
  supply: 1,
  explicit_and_sensitive_content: false,
  attributes: [
    {trait_type: "gradient1", value: hash.colors[0]},
    {trait_type: "gradient2", value: hash.colors[1]},
    {trait_type: "height", value: hash.height},
    {trait_type: "width", value: hash.width},
    {trait_type: "diameter", value: hash.diameter},
    {trait_type: "iterations", value: hash.iterations},
    {trait_type: "functions", value: hash.renderFunctionIndexes.join(',')},
  ]
});

function generateMetadata(metadata) {
  return Object.assign(getDefaultMetadata(), metadata);
}

module.exports = generateMetadata;
