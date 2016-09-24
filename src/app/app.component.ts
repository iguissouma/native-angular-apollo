import { Component } from 'nativescript-ng2-magic';
import { OnInit, AfterViewInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';
import { Subject } from 'rxjs/Subject';

// We need this to parse graphql string
import gql from 'graphql-tag';
import {client} from "./client";

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']

})
export class AppComponent implements OnInit, AfterViewInit {
  // Observable with GraphQL result
  public users: any;
  // Observable variable of the graphql query
  private apollo: Angular2Apollo;
  private title: string;

  // Inject Angular2Apollo service
  constructor() {

    console.log('constructor try to initialise apollo');
    console.log('this='+this);
    console.log('this.apollo='+this.apollo);
  }

  public ngOnInit() {
    this.apollo = new Angular2Apollo(client);

    // Query users data with observable variables
    this.apollo.watchQuery({
      query: gql`
        query getUsers($name: String) {
          users(name: $name) {
            firstName
            lastName
            emails {
              address
              verified
            }
          }
        }
      `,
      variables: {
        name: 'hello',
      },
    })
    // Return only users, not the whole ApolloQueryResult
      .subscribe(({data}) => {
        this.users = data.users;
      });
     this.title = 'List of users'
  }

  public ngAfterViewInit() {
    // Set nameFilter to null after NgOnInit happend and the view has been initated
  }

}
