export interface Role {
    /**
     * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Id` |
     * | Type | `Edm.Guid` |
     * | Nullable | `false` |
     */
    Id: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `NAME` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    NAME: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DESCRIPTION` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    DESCRIPTION: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `AUTH_COUNT` |
     * | Type | `Edm.String` |
     */
    AUTH_COUNT: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ACTIVE` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    ACTIVE: boolean;
}

export type VwHrroleId = string | {Id: string};

export interface EditableVwHrrole extends Pick<Role, "NAME" | "DESCRIPTION" | "ACTIVE">, Partial<Pick<Role, "AUTH_COUNT">> {
}
