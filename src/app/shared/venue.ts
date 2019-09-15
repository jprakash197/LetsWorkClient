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
    venueType: string;
    rating: number;
    image: Image[];
    feature: Feature[];
<<<<<<< HEAD
    bookings: Booking[];
=======
    booking: Booking[];
>>>>>>> 38a082fbd76ce2a231550bff9d5dcaf520c7f422
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
