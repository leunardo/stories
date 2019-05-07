import { BehaviorSubject, from, ReplaySubject } from 'rxjs';
import { tap, map, scan } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default class StoriesService {
  _storiesDB = firebase.firestore().collection('stories');
  _stories$ = new ReplaySubject();
  last$ = new BehaviorSubject();

  get stories$() {
    return this._stories$.pipe(scan((acc, val) => [...acc, ...val], []));
  }

  load(size = 10) {
    let query = this._storiesDB.orderBy('date');

    if (this.last$.value) {
      query = query.startAfter(this.last$.value);
    }

    const ref = query.limit(size).get();

    from(ref)
      .pipe(
        tap(snapshot => {
          this.last$.next(snapshot.docs[snapshot.docs.length - 1]);
        }),
        map(snapshot => snapshot.docs),
        map(docs =>
          docs.map(d => {
            return {
              brief: d.get('brief'),
              photo: d.get('photo'),
              title: d.get('title'),
              tags: d.get('tags'),
              friendlyUrl: d.get('friendly_url')
            };
          })
        )
      )
      .subscribe(stories => {
        this._stories$.next(stories);
      });
  }

  dispose() {
    this._stories$.complete();
    this.last$.complete();
  }
}
