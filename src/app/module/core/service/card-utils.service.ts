import {Injectable} from '@angular/core';
import {ReviewVote} from '../api/card/reviewVote';

@Injectable({
  providedIn: 'root'
})
export class CardUtilsService {

  constructor() {
  }

  public getReviewVote(avgReview: number): {
    ratingVote: string;
    color: string;
  } {
    let reviewVoteName: ReviewVote;
    let reviewVoteColor: string;

    if (Math.floor(avgReview) === 2) {
      reviewVoteName = ReviewVote.QUITE_GOOD;
    } else if (Math.floor(avgReview) === 3) {
      reviewVoteName = ReviewVote.GOOD;
    } else if (Math.floor(avgReview) === 4) {
      reviewVoteName = ReviewVote.VERY_GOOD;
    } else if (Math.floor(avgReview) === 5) {
      reviewVoteName = ReviewVote.SUPERB;
    } else {
      reviewVoteName = ReviewVote.NONE;
    }

    switch (reviewVoteName) {
      case ReviewVote.QUITE_GOOD: {
        reviewVoteColor = '#61615E';
        break;
      }
      case ReviewVote.GOOD: {
        reviewVoteColor = '#1C761C';
        break;
      }
      case ReviewVote.VERY_GOOD: {
        reviewVoteColor = '#F8B162';
        break;
      }
      case ReviewVote.SUPERB: {
        reviewVoteColor = '#661626';
        break;
      }
    }
    return {
      ratingVote: reviewVoteName,
      color: reviewVoteColor
    };
  }

}
