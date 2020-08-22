module Accounting {
    export class TransactionDto {
        Id: number;
        CreateAccountId: number;
        CerateDate: string;
        PersonCerateDate: string;
        SumDebtor: number;
        SumCreditor: number;
        /// توضیحات
        Description: string;
        DocType: number;
        ApplicantType: number;
        PersonApplicantType: number;
        ApplicantId: number;
    }
    export class TransactionSearchDto {
        Offset: number;
        PageSize: number;
    }
}