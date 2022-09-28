/**
 * @generated SignedSource<<bea0594267e1c3f21afdeed52fcf79f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type blogPostQuery$variables = {};
export type blogPostQuery$data = {
  readonly crudio_Blogs_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly BlogTags_connection: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly Tag: {
                readonly name: string;
              } | null;
              readonly id: string;
            };
          }>;
        };
        readonly article: string | null;
        readonly id: string;
      };
    }>;
  };
};
export type blogPostQuery = {
  response: blogPostQuery$data;
  variables: blogPostQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "article",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "blogPostQuery",
    "selections": [
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "crudio_BlogTagsConnection",
                    "kind": "LinkedField",
                    "name": "BlogTags_connection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "crudio_BlogTagsEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "crudio_BlogTags",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "crudio_Tags",
                                "kind": "LinkedField",
                                "name": "Tag",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/)
                                ],
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "blogPostQuery",
    "selections": [
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "crudio_BlogTagsConnection",
                    "kind": "LinkedField",
                    "name": "BlogTags_connection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "crudio_BlogTagsEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "crudio_BlogTags",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "crudio_Tags",
                                "kind": "LinkedField",
                                "name": "Tag",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v0/*: any*/)
                                ],
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bbaf3a226b5b65e4cd908f99a9f8460d",
    "id": null,
    "metadata": {},
    "name": "blogPostQuery",
    "operationKind": "query",
    "text": "query blogPostQuery {\n  crudio_Blogs_connection {\n    edges {\n      node {\n        id\n        article\n        BlogTags_connection {\n          edges {\n            node {\n              id\n              Tag {\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f1578eaf2ee6c65cf55d826749d8da1d";

export default node;
