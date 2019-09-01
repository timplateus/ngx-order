import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AddAccountComponent} from './components/add-account/add-account.component';

export interface Account {
  id: string;
  name: string;
}

export interface Table {
  id: number;
  name: string;
  accounts: Array<Account>;
}

@Component({
  selector: 'oc-overview-page',
  styleUrls: ['./overview-page.component.scss'],
  templateUrl: './overview-page.component.html'
})
export class OverviewPageComponent {

  public tables: Array<Table> =
    [
      {
        accounts: [
          {
            id: '332fe5b3-bc48-41b1-9169-b67fe79d4d3f',
            name: 'Janowicz'
          }
        ],
        id: 1,
        name: 'A1'
      },
      {
        accounts: [
          {
            id: 'd6f4bf5a-4406-4753-9318-e67fcafc49b1',
            name: 'O\'Teague'
          },
          {
            id: '5f27d7b2-ca24-4ed4-952a-7d7679768cfe',
            name: 'Baxstare'
          },
          {
            id: '00925545-b6b9-410e-8d36-9eae621882fe',
            name: 'Beahan'
          },
          {
            id: 'aebf8c3f-b72e-4b99-a275-c9389e10c51f',
            name: 'Leavens'
          }
        ],
        id: 2,
        name: 'A2'
      },
      {
        accounts: [
          {
            id: '6b436924-3910-4ef9-beb8-c394362bdae6',
            name: 'Girling'
          }
        ],
        id: 3,
        name: 'A3',
      },
      {
        accounts: [],
        id: 4,
        name: 'B1'
      },
      {
        accounts: [],
        id: 5,
        name: 'B2'
      },
      {
        accounts: [
          {
            id: 'e4a59bc8-c594-48f9-ae8e-6450aa861ce6',
            name: 'Vahey'
          },
          {
            id: '74f38a41-ffc6-4440-ab54-5f1ca7c597db',
            name: 'Chevin'
          },
          {
            id: '1de018e6-567d-4f7a-ba54-82c1df096248',
            name: 'Dean'
          }
        ],
        id: 6,
        name: 'B3'
      },
      {
        accounts: [
          {
            id: 'db071e99-9dc4-4021-bd3f-06789304d629',
            name: 'Cayton'
          }
        ],
        id: 7,
        name: 'C1'
      }, {
      id: 8,
      name: 'C2',
      accounts: [
        {
          id: 'ed9c3a4a-56ce-48d6-9249-4cd0db5d8669',
          name: 'Corrett'
        }
      ]
    },
      {
        id: 9,
        name: 'C3',
        accounts: [
          {
            id: 'a0c22299-12b2-487a-a843-bdec8a6ad1ef',
            name: 'Jeenes'
          },
          {
            id: '88bc16b4-5b5c-4f3b-a2ce-b12801b38e30',
            name: 'Esselin'
          },
          {
            id: '5ca4925e-683a-48f0-b65e-f751b0850c40',
            name: 'Rubinovici'
          },
          {
            id: 'b47c1ee7-5e08-4069-9cc2-17d2fd74145c',
            name: 'Busst'
          }
        ]
      },
      {
        id: 10,
        name: 'D1',
        accounts: [
          {
            id: 'a99a8d9c-ad4e-4cf5-9234-b21e5329f08c',
            name: 'Fulger'
          },
          {
            id: 'f6ccdd7e-8449-47a0-b239-5cf3dcb0be9d',
            name: 'Zorener'
          },
          {
            id: '5b7d86a0-b24a-4aa7-9856-d2eee19e4eeb',
            name: 'Penquet'
          },
          {
            id: 'c5ccac8d-4999-4a12-8bf9-5f25d4f58a0b',
            name: 'Banton'
          }
        ]
      },
      {
        id: 11,
        name: 'D2',
        accounts: [
          {
            id: 'fc31760f-7fe3-4d67-b4b5-53a10fd87f90',
            name: 'Sowerby'
          },
          {
            id: '9fefd29e-f969-4e49-9771-f320bbb50f01',
            name: 'Housecroft'
          },
          {
            id: '4c4f9312-4359-47ac-833e-d716b822cbfe',
            name: 'Cleatherow'
          },
          {
            id: '988916c2-21ed-4ae2-92b9-54b6adef46c0',
            name: 'Aarons'
          }
        ]
      },
      {
        id: 12,
        name: 'D3',
        accounts: [
          {
            id: '2aa03c3c-4c33-4b6e-b6bf-1ae6af737870',
            name: 'Drysdall'
          },
          {
            id: '3d6da88b-9cfe-480f-a27d-03c62ac0fe6b',
            name: 'Stutter'
          },
          {
            id: 'a9e67ef7-61b0-4a7a-8dcb-ccf3de1921b5',
            name: 'Coneybeare'
          },
          {
            id: '3535ede2-f2ad-49a8-b1ff-a889f25e2f73',
            name: 'Roche'
          }
        ]
      },
      {
        id: 13,
        name: 'E1',
        accounts: []
      },
      {
        id: 14,
        name: 'E2',
        accounts: []
      },
      {
        id: 15,
        name: 'E3',
        accounts: [
          {
            id: '76f89536-eaef-4287-bb23-f2121600c088',
            name: 'Maly'
          },
          {
            id: '7b6a4a7b-5e65-4e82-b230-116428b0ecc1',
            name: 'Howarth'
          }
        ]
      },
      {
        id: 16,
        name: 'F1',
        accounts: []
      },
      {
        id: 17,
        name: 'F2',
        accounts: [
          {
            id: '0562e15f-9b33-41e5-b42e-8cf369b52244',
            name: 'Benedite'
          }
        ]
      },
      {
        id: 18,
        name: 'F3',
        accounts: []
      },
      {
        id: 19,
        name: 'G1',
        accounts: []
      },
      {
        id: 20,
        name: 'G2',
        accounts: [
          {
            id: '8e82282c-1b5a-46f8-ad9e-3767c61d7439',
            name: 'Davidow'
          },
          {
            id: 'b7010c1b-f60d-43a9-a60a-408cfc0b1c0f',
            name: 'Kilrow'
          },
          {
            id: '9f3cb4a8-8d83-43a0-a417-7311f605ddce',
            name: 'Dibling'
          }
        ]
      }, {
      id: 21,
      name: 'G3',
      accounts: [
        {
          id: '73a2a4c0-ef73-48e2-b36b-04eb7b22a959',
          name: 'McEachern'
        }
      ]
    }, {
      id: 22,
      name: 'H1',
      accounts: []
    }, {
      id: 23,
      name: 'H2',
      accounts: [
        {
          id: 'fde95f06-1431-45dc-996f-068f8228477e',
          name: 'Straw'
        },
        {
          id: '2a9c6637-5358-4b96-8861-c979ad1f9dee',
          name: 'Errey'
        },
        {
          id: 'a3e61859-0c0a-42a2-ac9e-8ade477b0ee3',
          name: 'Vanyukov'
        },
        {
          id: 'b9a6c1ea-edd4-43b8-af20-0eb877c9d18a',
          name: 'Shoebotham'
        }
      ]
    },
      {
      id: 24,
      name: 'H3',
      accounts: [
        {
          id: '2bf67a5e-52c6-40db-8f71-2687f45b0d34',
          name: 'Gilley'
        },
        {
          id: '2ebd6587-59dc-417a-86fa-95c36c0a6d2b',
          name: 'Gyse'
        },
        {
          id: 'c12736a8-2566-4657-8330-f407a95ca8b1',
          name: 'Forber'
        }
      ]
    }, {
      id: 25,
      name: 'I1',
      accounts: [
        {
          id: '6923b5b1-93ce-4df0-ab51-e9cb881dbac7',
          name: 'Goulden'
        },
        {
          id: 'd2ef50cf-ebc7-47ff-bb28-291e6bccbdca',
          name: 'Naptin'
        },
        {
          id: 'c761088d-306d-4aa1-bf22-bf7efb5ec2f0',
          name: 'Bowery'
        },
        {
          id: 'c8c4a571-48c6-4396-a98f-c9bb938e35ce',
          name: 'Lohde'
        }
      ]
    }];

  constructor(private router: Router, private dialog: MatDialog) {
  }
  openAddDialog(currentTable: Table) {
    const dialogRef = this.dialog.open(AddAccountComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe((result: string) => this.addAccountToTable(result, currentTable));
  }

  goToOrder() {
    this.router.navigate(['../order']);
  }

  private addAccountToTable(name, table): void {
   // TODO: post to '/account/add'
    table.accounts = [...table.accounts, {id: 'new-account', name}];
    this.tables.map((t) => t.id === table.id ? table : t);
  }
}
