const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Node.js JSON API Documentation",
    version: "1.0.0",
    description: "Interactive Swagger API documentation for the Node.js JSON CRUD API."
  },
  servers: [
    {
      url: "/",
      description: "Current Server"
    }
  ],
  tags: [
    {
      name: "General",
      description: "Root, health check, and test endpoints"
    },
    {
      name: "Users",
      description: "User CRUD operations"
    }
  ],
  paths: {
    "/": {
      get: {
        summary: "API root status",
        tags: ["General"],
        responses: {
          200: {
            description: "API is running successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "Node.js JSON API is running" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/test": {
      get: {
        summary: "Test route with persistent visitor count",
        tags: ["General"],
        responses: {
          200: {
            description: "Returns running status and persistent visitor count",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "Node.js JSON API is running" },
                    visitorCount: { type: "integer", example: 5 }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api": {
      get: {
        summary: "API base status check",
        tags: ["General"],
        responses: {
          200: {
            description: "API is working",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "API is working" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/users": {
      get: {
        summary: "Get all users",
        tags: ["Users"],
        responses: {
          200: {
            description: "List of all users retrieved successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    count: { type: "integer", example: 2 },
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/User"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      post: {
        summary: "Create a new user",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInput"
              }
            }
          }
        },
        responses: {
          201: {
            description: "User created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "User created successfully" },
                    data: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          400: {
            description: "Validation error (missing name or email)",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/users/{id}": {
      get: {
        summary: "Get a single user by ID",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "Numeric ID of the user",
            schema: {
              type: "integer",
              example: 1
            }
          }
        ],
        responses: {
          200: {
            description: "User found and returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    data: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      put: {
        summary: "Update user by ID",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "Numeric ID of the user to update",
            schema: {
              type: "integer",
              example: 1
            }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserUpdateInput"
              }
            }
          }
        },
        responses: {
          200: {
            description: "User updated successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "User updated successfully" },
                    data: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      delete: {
        summary: "Delete user by ID",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "Numeric ID of the user to delete",
            schema: {
              type: "integer",
              example: 1
            }
          }
        ],
        responses: {
          200: {
            description: "User deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean", example: true },
                    message: { type: "string", example: "User deleted successfully" },
                    data: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1
          },
          name: {
            type: "string",
            example: "Rafiqul Islam"
          },
          email: {
            type: "string",
            format: "email",
            example: "rafiqul@example.com"
          },
          age: {
            type: "integer",
            nullable: true,
            example: 25
          }
        }
      },
      UserInput: {
        type: "object",
        required: ["name", "email"],
        properties: {
          name: {
            type: "string",
            example: "Rafiqul Islam"
          },
          email: {
            type: "string",
            format: "email",
            example: "rafiqul@example.com"
          },
          age: {
            type: "integer",
            nullable: true,
            example: 25
          }
        }
      },
      UserUpdateInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "Rafiqul Islam"
          },
          email: {
            type: "string",
            format: "email",
            example: "rafiqul@example.com"
          },
          age: {
            type: "integer",
            nullable: true,
            example: 26
          }
        }
      },
      ErrorResponse: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: false
          },
          message: {
            type: "string",
            example: "User not found"
          }
        }
      }
    }
  }
};

const swaggerSpec = swaggerJsdoc({
  swaggerDefinition,
  apis: []
});

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

module.exports = {
  swaggerSpec,
  setupSwagger
};
