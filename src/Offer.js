class Offer {

  constructor(data) {
    this.id = data.id;
    this.city = {};
    this.city.name = data.city.name;
    this.city.location = data.city.location;
    this.src = data.preview_image;
    this.photos = data.images.map((it) => it);
    this.description = data.description;
    this.premium = data.is_premium;
    this.bedrooms = data.bedrooms;
    this.guests = data.max_adults;
    this.features = data.goods.map((it) => it);
    this.owner = {};
    this.owner.id = data.host.id;
    this.owner.name = data.host.name;
    this.owner.super = data.host.is_pro;
    this.owner.src = data.host.avatar_url;
    this.price = data.price;
    this.rating = data.rating;
    this.name = data.title;
    this.type = data.type;
    this.coordinates = [data.location.latitude, data.location.longitude];
    this.reviews = [];
    this.neighborhood = [];
  }
}

export default Offer;
