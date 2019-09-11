export class VenueRequest {

    date: Date;
    capacity: number;
    city: String;
    venueType: String;

}

export class Venue {

    id: number;
    name: string;
    city: string;
    address: string;
    size: number;
    capacity: number;
    price: number;
    description: string;
    type: string;
    rating: number;
    images: Image[];
    features: Feature[];
    bookings: Booking[];
}

export class Image {
    id: number;
    img: string;
}

export class Feature {
    id: number;
}

export class Booking {
    id: number;
    date: Date;
}