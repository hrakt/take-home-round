/**
 * @generated SignedSource<<0189e79a44e593735add505a12bab257>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type blogPostListQuery$variables = {};
export type blogPostListQuery$data = {
  readonly crudio_Blogs_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly article: string | null;
        readonly id: string;
      };
    }>;
  };
};
export type blogPostListQuery = {
  response: blogPostListQuery$data;
  variables: blogPostListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "crudio_BlogsConnection",
    "kind": "LinkedField",
    "name": "crudio_Blogs_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "crudio_BlogsEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "crudio_Blogs",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "article",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "blogPostListQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "blogPostListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b8b47059a4161841c56d96c723924052",
    "id": null,
    "metadata": {},
    "name": "blogPostListQuery",
    "operationKind": "query",
    "text": "query blogPostListQuery {\n  crudio_Blogs_connection {\n    edges {\n      node {\n        id\n        article\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d1746e1c82d7b1585f1fc01d444d956";

export default node;
