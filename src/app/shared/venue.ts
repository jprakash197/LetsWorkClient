export class VenueRequest {

    date: Date;
    capacity: number;
    city: string;
    venueType: string;

}

export class Venue {

    venueId: number;
    venueName: string;
    city: string;
    address: string;
    size: number;
    capacity: number;
    price: number;
    description: string;
    type: string;
    rating: number;
    image: Image[];
    feature: Feature[];
    bookings: Booking[];
}

export class Image {
    imageId: number;
    image: string;
}

export class Feature {
    id: number;
}

export class Booking {
    id: number;
    date: Date;
}
