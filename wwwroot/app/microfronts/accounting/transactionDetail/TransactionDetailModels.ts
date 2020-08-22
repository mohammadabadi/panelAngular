module Accounting {
    export class TransactionDetailDto {
        Id: number;
        /// آیدی جدول پدرش
        /// Transactions
        FK_TransactionId: number;
        /// کاربر ایجاد کننده
        CreateAccountId: number;
        /// تاریخ ایجاد
        CerateDate: string;
        /// بدهکاری
        Debtor: number;
        /// بستانکاری
        Creditor: number;
        /// آپدی جدول کد معین
        Fk_AccountingSecondaryCodeId: number;
        /// آیدی جدول کد تفصیلی1
        /// AccountingDetailedCode
        FK_AccountingDetailedCode1Id: number;
        /// آیدی جدول کد تفصیلی2
        /// AccountingDetailedCode
        FK_AccountingDetailedCode2Id?: number;
        /// آیدی جدول کد تفصیلی3
        /// AccountingDetailedCode
        FK_AccountingDetailedCode3Id?: number;
        /// کدهای تفصیلی 4 به بعد
        /// AccountingDetailedCode
        AccountingDetailedCodeJson?: string;
        /// توضیحات
        Description?: string;
        /// نوع سند
        DocType: number;
        /// نوع درخواست دهنده
        ApplicantType: number;
        /// سناسه درخواست دهنده
        ApplicantId: number;
        PersonCerateDate: string;
        PersonApplicantType: string;
        AccountingDetailedCode: string;
        AccountingDetailedTitle: string;
        AccuontingSecondaryCode:string;
    }
    export class TransactionDetailSearchDto {
        FromTransactionId?: number;
        ToTransactionId?: number;
        FromCreateDate?: Date;
        ToCreateDate?: Date;
        AccountingDetailedCodeId?: number;
        AccountingDetailedCode?: string;
        AccountingSecondaryCodeId?: number;
        Offset: number;
        PageSize: number;
    }
}