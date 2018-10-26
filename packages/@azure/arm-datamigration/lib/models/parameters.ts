/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-07-15-preview',
    type: {
      name: "String"
    }
  }
};
export const deleteRunningTasks: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "deleteRunningTasks"
  ],
  mapper: {
    serializedName: "deleteRunningTasks",
    type: {
      name: "Boolean"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const fileName: msRest.OperationURLParameter = {
  parameterPath: "fileName",
  mapper: {
    required: true,
    serializedName: "fileName",
    type: {
      name: "String"
    }
  }
};
export const groupName: msRest.OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    required: true,
    serializedName: "groupName",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const projectName: msRest.OperationURLParameter = {
  parameterPath: "projectName",
  mapper: {
    required: true,
    serializedName: "projectName",
    type: {
      name: "String"
    }
  }
};
export const serviceName: msRest.OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    required: true,
    serializedName: "serviceName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const taskName: msRest.OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    required: true,
    serializedName: "taskName",
    type: {
      name: "String"
    }
  }
};
export const taskType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "taskType"
  ],
  mapper: {
    serializedName: "taskType",
    type: {
      name: "String"
    }
  }
};
