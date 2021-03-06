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
    booking: Booking[];

    randomVenueType(): string {
        const VENUE_TYPES = ['Conference', 'Training', 'Workshop', 'Meeting'];
        const RANDOM_INDEX = Math.random() * 3;
        return VENUE_TYPES[0];
    }
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
