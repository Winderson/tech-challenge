export const SwaggerGetProducts = {
	schema: {
		summary: 'Get products',
		description: 'Returns products',
		tags: ['Product'],
		querystring: {
			type: 'object',
			properties: {
				category: {
					type: 'string',
				},
			},
		},
		response: {
			200: {
				description: 'Success get products',
				type: 'array',
				items: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							format: 'uuid',
						},
						name: {
							type: 'string',
						},
						amount: {
							type: 'string',
							format: 'money',
						},
						category: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
							},
						},
						createdAt: {
							type: 'string',
							format: 'datetime',
						},
						updatedAt: {
							type: 'string',
							format: 'datetime',
						},
					},
				},
			},
			500: {
				description: 'Unexpected error when listing for products',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};

export const SwaggerDeleteProducts = {
	schema: {
		summary: 'Delete products',
		description: 'Delete a product by ID',
		tags: ['Product'],
		params: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					format: 'uuid',
					description: 'The unique identifier of the product to delete',
				},
			},
			required: ['id'],
			additionalProperties: false,
		},
		response: {
			200: {
				description: 'Product successfully deleted',
				type: 'object',
				properties: {
					message: {
						type: 'string',
						example: 'Product successfully deleted',
					},
				},
			},
			404: {
				description: 'Product not found',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
			500: {
				description: 'Unexpected error when deleting product',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};

export const SwaggerCreateProducts = {
	schema: {
		summary: 'Create products',
		description: 'Create products',
		tags: ['Products'],
		body: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'Product Id',
				},
				amount: {
					type: 'number',
					description: 'Product amount',
				},
				description: {
					type: 'string',
					description: 'Product description',
				},
			},
		},
		response: {
			201: {
				description: 'Created products',
				type: 'object',
				properties: {
					id: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					description: {
						type: 'description',
					},
					createdAt: {
						type: 'string',
						format: 'datetime',
					},
					updatedAt: {
						type: 'string',
						format: 'datetime',
					},
				},
			},
			400: {
				description: 'Invalid parameters to products create',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
			500: {
				description: 'Unexpected error when creating products',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};

export const SwaggerUpdateProducts = {
	schema: {
		summary: 'Update products',
		description: 'Update products',
		tags: ['Products'],
		params: { id: { type: 'string' } },
		body: {
			status: {
				type: 'string',
			},
		},
		response: {
			200: {
				description: 'Success updated product data',
				type: 'object',
				properties: {
					id: {
						type: 'string',
					},
					productId: {
						type: 'string',
						format: 'nullable',
					},
					status: {
						type: 'string',
					},
					createdAt: {
						type: 'string',
						format: 'date-time',
					},
					updatedAt: {
						type: 'string',
						format: 'date-time',
					},
				},
			},
			400: {
				description: 'Bad request',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'number',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
			500: {
				description: 'Server error',
				type: 'object',
				properties: {
					path: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					message: {
						type: 'string',
					},
					details: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
		},
	},
};
