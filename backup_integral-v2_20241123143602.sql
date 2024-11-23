--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: account_to_pay; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_to_pay (
    id integer NOT NULL,
    date date NOT NULL,
    "purchaseId" integer NOT NULL,
    "userId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.account_to_pay OWNER TO postgres;

--
-- Name: account_to_pay_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_to_pay_detail (
    id integer NOT NULL,
    "accountToPayId" integer NOT NULL,
    "purchaseId" integer NOT NULL,
    due_date date NOT NULL,
    amount double precision NOT NULL,
    paid boolean DEFAULT false NOT NULL
);


ALTER TABLE public.account_to_pay_detail OWNER TO postgres;

--
-- Name: account_to_pay_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_to_pay_detail_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.account_to_pay_detail_id_seq OWNER TO postgres;

--
-- Name: account_to_pay_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_to_pay_detail_id_seq OWNED BY public.account_to_pay_detail.id;


--
-- Name: account_to_pay_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_to_pay_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.account_to_pay_id_seq OWNER TO postgres;

--
-- Name: account_to_pay_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_to_pay_id_seq OWNED BY public.account_to_pay.id;


--
-- Name: brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brand (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.brand OWNER TO postgres;

--
-- Name: brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brand_id_seq OWNER TO postgres;

--
-- Name: brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brand_id_seq OWNED BY public.brand.id;


--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO postgres;

--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public.city OWNER TO postgres;

--
-- Name: city_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.city_id_seq OWNER TO postgres;

--
-- Name: city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;


--
-- Name: concept; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.concept (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    pricing integer NOT NULL,
    "taxTypeId" integer NOT NULL,
    "categoryId" integer NOT NULL,
    "currencyId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.concept OWNER TO postgres;

--
-- Name: concept_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.concept_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.concept_id_seq OWNER TO postgres;

--
-- Name: concept_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.concept_id_seq OWNED BY public.concept.id;


--
-- Name: credit_note_purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credit_note_purchase (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    timbrado character varying(13) NOT NULL,
    "creditNoteNumber" character varying(13) NOT NULL,
    "userId" integer NOT NULL,
    "purchaseId" integer NOT NULL,
    "supplierId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.credit_note_purchase OWNER TO postgres;

--
-- Name: credit_note_purchase_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credit_note_purchase_detail (
    "creditNotePurchaseId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.credit_note_purchase_detail OWNER TO postgres;

--
-- Name: credit_note_purchase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.credit_note_purchase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.credit_note_purchase_id_seq OWNER TO postgres;

--
-- Name: credit_note_purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.credit_note_purchase_id_seq OWNED BY public.credit_note_purchase.id;


--
-- Name: currency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.currency (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    symbol character varying(10) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.currency OWNER TO postgres;

--
-- Name: currency_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.currency_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.currency_id_seq OWNER TO postgres;

--
-- Name: currency_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.currency_id_seq OWNED BY public.currency.id;


--
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    document character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    phone character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "cityId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "districtId" integer NOT NULL,
    social_reason character varying(100) NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- Name: customer_branch; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_branch (
    id integer NOT NULL,
    "customerId" integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "cityId" integer NOT NULL,
    "districtId" integer NOT NULL,
    address character varying(100) NOT NULL
);


ALTER TABLE public.customer_branch OWNER TO postgres;

--
-- Name: customer_branch_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_branch_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_branch_id_seq OWNER TO postgres;

--
-- Name: customer_branch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_branch_id_seq OWNED BY public.customer_branch.id;


--
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customer_id_seq OWNER TO postgres;

--
-- Name: customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_id_seq OWNED BY public.customer.id;


--
-- Name: debit_note_purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.debit_note_purchase (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    timbrado character varying(13) NOT NULL,
    "debitNoteNumber" character varying(13) NOT NULL,
    "userId" integer NOT NULL,
    "purchaseId" integer NOT NULL,
    "supplierId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.debit_note_purchase OWNER TO postgres;

--
-- Name: debit_note_purchase_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.debit_note_purchase_detail (
    "debitNotePurchaseId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.debit_note_purchase_detail OWNER TO postgres;

--
-- Name: debit_note_purchase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.debit_note_purchase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.debit_note_purchase_id_seq OWNER TO postgres;

--
-- Name: debit_note_purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.debit_note_purchase_id_seq OWNED BY public.debit_note_purchase.id;


--
-- Name: district; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.district (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "cityId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public.district OWNER TO postgres;

--
-- Name: district_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.district_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.district_id_seq OWNER TO postgres;

--
-- Name: district_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.district_id_seq OWNED BY public.district.id;


--
-- Name: document_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.document_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.document_type OWNER TO postgres;

--
-- Name: document_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.document_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.document_type_id_seq OWNER TO postgres;

--
-- Name: document_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.document_type_id_seq OWNED BY public.document_type.id;


--
-- Name: establishment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.establishment (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    number character varying(3) NOT NULL
);


ALTER TABLE public.establishment OWNER TO postgres;

--
-- Name: establishment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.establishment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.establishment_id_seq OWNER TO postgres;

--
-- Name: establishment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.establishment_id_seq OWNED BY public.establishment.id;


--
-- Name: expedition_point; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expedition_point (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    number character varying(3) NOT NULL
);


ALTER TABLE public.expedition_point OWNER TO postgres;

--
-- Name: expedition_point_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.expedition_point_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.expedition_point_id_seq OWNER TO postgres;

--
-- Name: expedition_point_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expedition_point_id_seq OWNED BY public.expedition_point.id;


--
-- Name: invoice_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.invoice_type OWNER TO postgres;

--
-- Name: invoice_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invoice_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.invoice_type_id_seq OWNER TO postgres;

--
-- Name: invoice_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoice_type_id_seq OWNED BY public.invoice_type.id;


--
-- Name: iva; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.iva (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    value double precision NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.iva OWNER TO postgres;

--
-- Name: iva_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.iva_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.iva_id_seq OWNER TO postgres;

--
-- Name: iva_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.iva_id_seq OWNED BY public.iva.id;


--
-- Name: payment_status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment_status (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.payment_status OWNER TO postgres;

--
-- Name: payment_status_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.payment_status_id_seq OWNER TO postgres;

--
-- Name: payment_status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_status_id_seq OWNED BY public.payment_status.id;


--
-- Name: purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase (
    id integer NOT NULL,
    date date NOT NULL,
    invoice_number character varying(100) NOT NULL,
    observation character varying(100),
    stamping character varying(100) NOT NULL,
    "invoiceTypeId" integer NOT NULL,
    "supplierId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "purchaseOrderId" integer NOT NULL
);


ALTER TABLE public.purchase OWNER TO postgres;

--
-- Name: purchase_budget; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_budget (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "userId" integer NOT NULL,
    "supplierId" integer NOT NULL,
    "purchasePedidoId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    budget_number character varying(100) NOT NULL
);


ALTER TABLE public.purchase_budget OWNER TO postgres;

--
-- Name: purchase_budget_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_budget_detail (
    "purchaseBudgetId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.purchase_budget_detail OWNER TO postgres;

--
-- Name: purchase_budget_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_budget_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchase_budget_id_seq OWNER TO postgres;

--
-- Name: purchase_budget_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_budget_id_seq OWNED BY public.purchase_budget.id;


--
-- Name: purchase_concept; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_concept (
    "purchaseId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL,
    taxes jsonb NOT NULL
);


ALTER TABLE public.purchase_concept OWNER TO postgres;

--
-- Name: purchase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchase_id_seq OWNER TO postgres;

--
-- Name: purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_id_seq OWNED BY public.purchase.id;


--
-- Name: purchase_money_box_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_money_box_detail (
    "purchaseId" integer NOT NULL,
    "strongboxId" integer NOT NULL,
    amount numeric NOT NULL
);


ALTER TABLE public.purchase_money_box_detail OWNER TO postgres;

--
-- Name: purchase_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_order (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "userId" integer NOT NULL,
    "supplierId" integer NOT NULL,
    "purchaseBudgetId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    order_number character varying(100) NOT NULL
);


ALTER TABLE public.purchase_order OWNER TO postgres;

--
-- Name: purchase_order_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_order_detail (
    "purchaseOrderId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.purchase_order_detail OWNER TO postgres;

--
-- Name: purchase_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchase_order_id_seq OWNER TO postgres;

--
-- Name: purchase_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_order_id_seq OWNED BY public.purchase_order.id;


--
-- Name: purchase_pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_pedido (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.purchase_pedido OWNER TO postgres;

--
-- Name: purchase_pedido_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_pedido_detail (
    "purchasePedidoId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.purchase_pedido_detail OWNER TO postgres;

--
-- Name: purchase_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_pedido_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchase_pedido_id_seq OWNER TO postgres;

--
-- Name: purchase_pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_pedido_id_seq OWNED BY public.purchase_pedido.id;


--
-- Name: quota_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quota_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    value integer NOT NULL,
    type character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.quota_type OWNER TO postgres;

--
-- Name: quota_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quota_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quota_type_id_seq OWNER TO postgres;

--
-- Name: quota_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quota_type_id_seq OWNED BY public.quota_type.id;


--
-- Name: remission_note_purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.remission_note_purchase (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "userId" integer NOT NULL,
    timbrado character varying(13) NOT NULL,
    "remissionNoteNumber" character varying(13) NOT NULL,
    "supplierId" integer NOT NULL,
    "purchaseId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.remission_note_purchase OWNER TO postgres;

--
-- Name: remission_note_purchase_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.remission_note_purchase_detail (
    "remissionNotePurchaseId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.remission_note_purchase_detail OWNER TO postgres;

--
-- Name: remission_note_purchase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.remission_note_purchase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.remission_note_purchase_id_seq OWNER TO postgres;

--
-- Name: remission_note_purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.remission_note_purchase_id_seq OWNED BY public.remission_note_purchase.id;


--
-- Name: sale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale (
    id integer NOT NULL,
    date date NOT NULL,
    invoice_number integer NOT NULL,
    observation character varying(100),
    "stampingId" integer NOT NULL,
    "invoiceTypeId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sale OWNER TO postgres;

--
-- Name: sale_concept; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_concept (
    "saleId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL,
    taxes jsonb NOT NULL
);


ALTER TABLE public.sale_concept OWNER TO postgres;

--
-- Name: sale_credit_note; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_credit_note (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "creditNoteNumber" integer NOT NULL,
    "userId" integer NOT NULL,
    "stampingId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "saleId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sale_credit_note OWNER TO postgres;

--
-- Name: sale_credit_note_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_credit_note_detail (
    "saleCreditNoteId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.sale_credit_note_detail OWNER TO postgres;

--
-- Name: sale_credit_note_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_credit_note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_credit_note_id_seq OWNER TO postgres;

--
-- Name: sale_credit_note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_credit_note_id_seq OWNED BY public.sale_credit_note.id;


--
-- Name: sale_debit_note; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_debit_note (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "debitNoteNumber" integer NOT NULL,
    "userId" integer NOT NULL,
    "stampingId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "saleId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sale_debit_note OWNER TO postgres;

--
-- Name: sale_debit_note_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_debit_note_detail (
    "saleDebitNoteId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.sale_debit_note_detail OWNER TO postgres;

--
-- Name: sale_debit_note_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_debit_note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_debit_note_id_seq OWNER TO postgres;

--
-- Name: sale_debit_note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_debit_note_id_seq OWNED BY public.sale_debit_note.id;


--
-- Name: sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_id_seq OWNER TO postgres;

--
-- Name: sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_id_seq OWNED BY public.sale.id;


--
-- Name: sale_pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_pedido (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "salePedidoNumber" character varying(100) NOT NULL,
    "userId" integer NOT NULL,
    "customerId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sale_pedido OWNER TO postgres;

--
-- Name: sale_pedido_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_pedido_detail (
    "salePedidoId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.sale_pedido_detail OWNER TO postgres;

--
-- Name: sale_pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_pedido_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_pedido_id_seq OWNER TO postgres;

--
-- Name: sale_pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_pedido_id_seq OWNED BY public.sale_pedido.id;


--
-- Name: sale_pedido_sale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_pedido_sale (
    "saleId" integer NOT NULL,
    "salePedidoId" integer NOT NULL
);


ALTER TABLE public.sale_pedido_sale OWNER TO postgres;

--
-- Name: sale_remission_note; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_remission_note (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "remissionNoteNumber" integer NOT NULL,
    "userId" integer NOT NULL,
    "stampingId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "saleId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sale_remission_note OWNER TO postgres;

--
-- Name: sale_remission_note_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale_remission_note_detail (
    "saleRemissionNoteId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.sale_remission_note_detail OWNER TO postgres;

--
-- Name: sale_remission_note_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_remission_note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_remission_note_id_seq OWNER TO postgres;

--
-- Name: sale_remission_note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_remission_note_id_seq OWNED BY public.sale_remission_note.id;


--
-- Name: service_budget; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_budget (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "serviceTypeId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_budget OWNER TO postgres;

--
-- Name: service_budget_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_budget_detail (
    "serviceBudgetId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.service_budget_detail OWNER TO postgres;

--
-- Name: service_budget_diagnostic_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_budget_diagnostic_detail (
    "serviceBudgetId" integer NOT NULL,
    "serviceDiagnosticId" integer NOT NULL
);


ALTER TABLE public.service_budget_diagnostic_detail OWNER TO postgres;

--
-- Name: service_budget_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_budget_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_budget_id_seq OWNER TO postgres;

--
-- Name: service_budget_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_budget_id_seq OWNED BY public.service_budget.id;


--
-- Name: service_budget_order_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_budget_order_detail (
    "serviceBudgetId" integer NOT NULL,
    "serviceOrderId" integer NOT NULL
);


ALTER TABLE public.service_budget_order_detail OWNER TO postgres;

--
-- Name: service_budget_request_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_budget_request_detail (
    "serviceBudgetId" integer NOT NULL,
    "serviceRequestId" integer NOT NULL
);


ALTER TABLE public.service_budget_request_detail OWNER TO postgres;

--
-- Name: service_claim; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_claim (
    id integer NOT NULL,
    "serviceContractId" integer NOT NULL,
    observation text NOT NULL,
    date date NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    description character varying(100) NOT NULL
);


ALTER TABLE public.service_claim OWNER TO postgres;

--
-- Name: service_claim_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_claim_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_claim_id_seq OWNER TO postgres;

--
-- Name: service_claim_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_claim_id_seq OWNED BY public.service_claim.id;


--
-- Name: service_contract; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_contract (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "userId" integer NOT NULL,
    "serviceBudgetId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_contract OWNER TO postgres;

--
-- Name: service_contract_clausule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_contract_clausule (
    id integer NOT NULL,
    "serviceContractId" integer NOT NULL,
    description character varying(100) NOT NULL,
    observation text NOT NULL
);


ALTER TABLE public.service_contract_clausule OWNER TO postgres;

--
-- Name: service_contract_clausule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_contract_clausule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_contract_clausule_id_seq OWNER TO postgres;

--
-- Name: service_contract_clausule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_contract_clausule_id_seq OWNED BY public.service_contract_clausule.id;


--
-- Name: service_contract_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_contract_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_contract_id_seq OWNER TO postgres;

--
-- Name: service_contract_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_contract_id_seq OWNED BY public.service_contract.id;


--
-- Name: service_diagnostic; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_diagnostic (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_diagnostic OWNER TO postgres;

--
-- Name: service_diagnostic_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_diagnostic_detail (
    id integer NOT NULL,
    "serviceDiagnosticId" integer NOT NULL,
    description character varying(100) NOT NULL,
    observation text NOT NULL
);


ALTER TABLE public.service_diagnostic_detail OWNER TO postgres;

--
-- Name: service_diagnostic_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_diagnostic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_diagnostic_id_seq OWNER TO postgres;

--
-- Name: service_diagnostic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_diagnostic_id_seq OWNED BY public.service_diagnostic.id;


--
-- Name: service_discount; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_discount (
    id integer NOT NULL,
    "discountPercentage" numeric NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.service_discount OWNER TO postgres;

--
-- Name: service_discount_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_discount_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_discount_id_seq OWNER TO postgres;

--
-- Name: service_discount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_discount_id_seq OWNED BY public.service_discount.id;


--
-- Name: service_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_order (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "serviceTypeId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_order OWNER TO postgres;

--
-- Name: service_order_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_order_detail (
    "serviceOrderId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.service_order_detail OWNER TO postgres;

--
-- Name: service_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_order_id_seq OWNER TO postgres;

--
-- Name: service_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_order_id_seq OWNED BY public.service_order.id;


--
-- Name: service_promotion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_promotion (
    id integer NOT NULL,
    "startDate" date NOT NULL,
    "endDate" date NOT NULL,
    name character varying(100),
    "serviceTypeId" integer NOT NULL,
    "discountPercentage" numeric NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_promotion OWNER TO postgres;

--
-- Name: service_promotion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_promotion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_promotion_id_seq OWNER TO postgres;

--
-- Name: service_promotion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_promotion_id_seq OWNED BY public.service_promotion.id;


--
-- Name: service_provided; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_provided (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "userId" integer NOT NULL,
    "serviceTypeId" integer NOT NULL,
    "serviceOrderId" integer NOT NULL,
    "serviceDiscountId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_provided OWNER TO postgres;

--
-- Name: service_provided_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_provided_detail (
    "serviceProvidedId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL,
    price numeric NOT NULL
);


ALTER TABLE public.service_provided_detail OWNER TO postgres;

--
-- Name: service_provided_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_provided_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_provided_id_seq OWNER TO postgres;

--
-- Name: service_provided_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_provided_id_seq OWNED BY public.service_provided.id;


--
-- Name: service_request; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_request (
    id integer NOT NULL,
    date date NOT NULL,
    observation character varying(100),
    "customerId" integer NOT NULL,
    "serviceTypeId" integer NOT NULL,
    "userId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_request OWNER TO postgres;

--
-- Name: service_request_concept; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_request_concept (
    "serviceRequestId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    "saleId" integer
);


ALTER TABLE public.service_request_concept OWNER TO postgres;

--
-- Name: service_request_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_request_detail (
    "serviceRequestId" integer NOT NULL,
    "conceptId" integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.service_request_detail OWNER TO postgres;

--
-- Name: service_request_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_request_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_request_id_seq OWNER TO postgres;

--
-- Name: service_request_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_request_id_seq OWNED BY public.service_request.id;


--
-- Name: service_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.service_type OWNER TO postgres;

--
-- Name: service_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.service_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.service_type_id_seq OWNER TO postgres;

--
-- Name: service_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.service_type_id_seq OWNED BY public.service_type.id;


--
-- Name: stamping; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stamping (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    number character varying(100) NOT NULL,
    "expeditionPointId" integer NOT NULL,
    "establishmentId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    "documentTypeId" integer NOT NULL
);


ALTER TABLE public.stamping OWNER TO postgres;

--
-- Name: stamping_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stamping_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stamping_id_seq OWNER TO postgres;

--
-- Name: stamping_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stamping_id_seq OWNED BY public.stamping.id;


--
-- Name: strongbox; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strongbox (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    amount double precision DEFAULT '0'::double precision NOT NULL,
    "currencyId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.strongbox OWNER TO postgres;

--
-- Name: strongbox_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strongbox_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strongbox_id_seq OWNER TO postgres;

--
-- Name: strongbox_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strongbox_id_seq OWNED BY public.strongbox.id;


--
-- Name: supplier; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supplier (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    document character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    phone character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    "cityId" integer NOT NULL,
    "districtId" integer NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    social_reason character varying(100) NOT NULL
);


ALTER TABLE public.supplier OWNER TO postgres;

--
-- Name: supplier_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.supplier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.supplier_id_seq OWNER TO postgres;

--
-- Name: supplier_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.supplier_id_seq OWNED BY public.supplier.id;


--
-- Name: tax_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tax_type (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    "valueDivider" double precision DEFAULT '0'::double precision NOT NULL,
    percentage double precision DEFAULT '0'::double precision NOT NULL
);


ALTER TABLE public.tax_type OWNER TO postgres;

--
-- Name: tax_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tax_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tax_type_id_seq OWNER TO postgres;

--
-- Name: tax_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tax_type_id_seq OWNED BY public.tax_type.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    lastname character varying(100) NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: account_to_pay id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay ALTER COLUMN id SET DEFAULT nextval('public.account_to_pay_id_seq'::regclass);


--
-- Name: account_to_pay_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay_detail ALTER COLUMN id SET DEFAULT nextval('public.account_to_pay_detail_id_seq'::regclass);


--
-- Name: brand id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand ALTER COLUMN id SET DEFAULT nextval('public.brand_id_seq'::regclass);


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: city id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);


--
-- Name: concept id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept ALTER COLUMN id SET DEFAULT nextval('public.concept_id_seq'::regclass);


--
-- Name: credit_note_purchase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase ALTER COLUMN id SET DEFAULT nextval('public.credit_note_purchase_id_seq'::regclass);


--
-- Name: currency id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currency ALTER COLUMN id SET DEFAULT nextval('public.currency_id_seq'::regclass);


--
-- Name: customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer ALTER COLUMN id SET DEFAULT nextval('public.customer_id_seq'::regclass);


--
-- Name: customer_branch id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_branch ALTER COLUMN id SET DEFAULT nextval('public.customer_branch_id_seq'::regclass);


--
-- Name: debit_note_purchase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase ALTER COLUMN id SET DEFAULT nextval('public.debit_note_purchase_id_seq'::regclass);


--
-- Name: district id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.district ALTER COLUMN id SET DEFAULT nextval('public.district_id_seq'::regclass);


--
-- Name: document_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.document_type ALTER COLUMN id SET DEFAULT nextval('public.document_type_id_seq'::regclass);


--
-- Name: establishment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.establishment ALTER COLUMN id SET DEFAULT nextval('public.establishment_id_seq'::regclass);


--
-- Name: expedition_point id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedition_point ALTER COLUMN id SET DEFAULT nextval('public.expedition_point_id_seq'::regclass);


--
-- Name: invoice_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_type ALTER COLUMN id SET DEFAULT nextval('public.invoice_type_id_seq'::regclass);


--
-- Name: iva id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iva ALTER COLUMN id SET DEFAULT nextval('public.iva_id_seq'::regclass);


--
-- Name: payment_status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_status ALTER COLUMN id SET DEFAULT nextval('public.payment_status_id_seq'::regclass);


--
-- Name: purchase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase ALTER COLUMN id SET DEFAULT nextval('public.purchase_id_seq'::regclass);


--
-- Name: purchase_budget id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget ALTER COLUMN id SET DEFAULT nextval('public.purchase_budget_id_seq'::regclass);


--
-- Name: purchase_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order ALTER COLUMN id SET DEFAULT nextval('public.purchase_order_id_seq'::regclass);


--
-- Name: purchase_pedido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido ALTER COLUMN id SET DEFAULT nextval('public.purchase_pedido_id_seq'::regclass);


--
-- Name: quota_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quota_type ALTER COLUMN id SET DEFAULT nextval('public.quota_type_id_seq'::regclass);


--
-- Name: remission_note_purchase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase ALTER COLUMN id SET DEFAULT nextval('public.remission_note_purchase_id_seq'::regclass);


--
-- Name: sale id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale ALTER COLUMN id SET DEFAULT nextval('public.sale_id_seq'::regclass);


--
-- Name: sale_credit_note id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note ALTER COLUMN id SET DEFAULT nextval('public.sale_credit_note_id_seq'::regclass);


--
-- Name: sale_debit_note id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note ALTER COLUMN id SET DEFAULT nextval('public.sale_debit_note_id_seq'::regclass);


--
-- Name: sale_pedido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido ALTER COLUMN id SET DEFAULT nextval('public.sale_pedido_id_seq'::regclass);


--
-- Name: sale_remission_note id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note ALTER COLUMN id SET DEFAULT nextval('public.sale_remission_note_id_seq'::regclass);


--
-- Name: service_budget id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget ALTER COLUMN id SET DEFAULT nextval('public.service_budget_id_seq'::regclass);


--
-- Name: service_claim id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_claim ALTER COLUMN id SET DEFAULT nextval('public.service_claim_id_seq'::regclass);


--
-- Name: service_contract id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract ALTER COLUMN id SET DEFAULT nextval('public.service_contract_id_seq'::regclass);


--
-- Name: service_contract_clausule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract_clausule ALTER COLUMN id SET DEFAULT nextval('public.service_contract_clausule_id_seq'::regclass);


--
-- Name: service_diagnostic id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic ALTER COLUMN id SET DEFAULT nextval('public.service_diagnostic_id_seq'::regclass);


--
-- Name: service_discount id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_discount ALTER COLUMN id SET DEFAULT nextval('public.service_discount_id_seq'::regclass);


--
-- Name: service_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order ALTER COLUMN id SET DEFAULT nextval('public.service_order_id_seq'::regclass);


--
-- Name: service_promotion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_promotion ALTER COLUMN id SET DEFAULT nextval('public.service_promotion_id_seq'::regclass);


--
-- Name: service_provided id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided ALTER COLUMN id SET DEFAULT nextval('public.service_provided_id_seq'::regclass);


--
-- Name: service_request id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request ALTER COLUMN id SET DEFAULT nextval('public.service_request_id_seq'::regclass);


--
-- Name: service_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_type ALTER COLUMN id SET DEFAULT nextval('public.service_type_id_seq'::regclass);


--
-- Name: stamping id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stamping ALTER COLUMN id SET DEFAULT nextval('public.stamping_id_seq'::regclass);


--
-- Name: strongbox id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strongbox ALTER COLUMN id SET DEFAULT nextval('public.strongbox_id_seq'::regclass);


--
-- Name: supplier id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier ALTER COLUMN id SET DEFAULT nextval('public.supplier_id_seq'::regclass);


--
-- Name: tax_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_type ALTER COLUMN id SET DEFAULT nextval('public.tax_type_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: account_to_pay; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_to_pay (id, date, "purchaseId", "userId", created_at, updated_at) FROM stdin;
6	2024-11-17	26	1	2024-11-17 20:18:53.538553	2024-11-17 20:18:53.538553
\.


--
-- Data for Name: account_to_pay_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.account_to_pay_detail (id, "accountToPayId", "purchaseId", due_date, amount, paid) FROM stdin;
2	6	26	2024-11-17	4500000	f
\.


--
-- Data for Name: brand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brand (id, name, active, created_at, updated_at) FROM stdin;
1	Marca 2	f	2024-02-17 14:35:15.629111	2024-02-17 14:35:15.629111
2	TEST	t	2024-02-26 19:58:13.744565	2024-02-26 19:58:13.744565
5	Marca examen II	t	2024-04-03 17:46:43.858811	2024-04-03 17:46:43.858811
\.


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (id, name, active, created_at, updated_at) FROM stdin;
1	Categoría 2	f	2024-02-17 14:26:34.022135	2024-02-17 14:26:34.022135
2	Equipos informaticos	t	2024-02-26 19:59:43.539239	2024-02-26 19:59:43.539239
3	Equipos de taller	t	2024-02-26 21:07:21.806878	2024-02-26 21:07:21.806878
4	mlñkjlñ	t	2024-03-03 18:33:08.792565	2024-03-03 18:33:08.792565
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (id, name, created_at, updated_at, active) FROM stdin;
2	Caaguazu	2024-02-17 12:01:44.935824	2024-02-17 12:01:44.935824	t
\.


--
-- Data for Name: concept; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.concept (id, name, pricing, "taxTypeId", "categoryId", "currencyId", active, created_at, updated_at) FROM stdin;
1	HP Omen 2500	4500000	2	2	2	t	2024-03-03 23:48:54.89004	2024-03-03 23:48:54.89004
2	Notebook	50000000	2	2	2	t	2024-04-03 17:48:05.075333	2024-04-03 17:48:05.075333
\.


--
-- Data for Name: credit_note_purchase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.credit_note_purchase (id, date, observation, timbrado, "creditNoteNumber", "userId", "purchaseId", "supplierId", active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: credit_note_purchase_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.credit_note_purchase_detail ("creditNotePurchaseId", "conceptId", quantity, price) FROM stdin;
\.


--
-- Data for Name: currency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.currency (id, name, symbol, active, created_at, updated_at) FROM stdin;
1	EURO	EUR	f	2024-02-17 14:47:22.087765	2024-02-17 14:47:22.087765
2	Guarani	PYG	t	2024-02-26 21:28:34.552318	2024-02-26 21:28:34.552318
3	Dolar	USD	t	2024-02-27 23:03:57.877746	2024-02-27 23:03:57.877746
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (id, name, document, address, phone, email, active, "cityId", created_at, updated_at, "districtId", social_reason) FROM stdin;
4	Juan Perez	5662244	Sobre asfalto casa 2555	097533355	juanparez@test.com	t	2	2024-03-03 17:38:09.163596	2024-03-03 17:38:09.163596	1	Juan Perez
\.


--
-- Data for Name: customer_branch; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer_branch (id, "customerId", name, active, created_at, updated_at, "cityId", "districtId", address) FROM stdin;
1	4	Central	t	2024-03-03 17:40:24.2154	2024-03-03 17:40:24.2154	2	1	Caaguazu
\.


--
-- Data for Name: debit_note_purchase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.debit_note_purchase (id, date, observation, timbrado, "debitNoteNumber", "userId", "purchaseId", "supplierId", active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: debit_note_purchase_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.debit_note_purchase_detail ("debitNotePurchaseId", "conceptId", quantity, price) FROM stdin;
\.


--
-- Data for Name: district; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.district (id, name, created_at, updated_at, "cityId", active) FROM stdin;
1	Barrio Carmelitas	2020-02-02 00:00:00	2020-02-02 00:00:00	2	t
\.


--
-- Data for Name: document_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.document_type (id, name, active, created_at, updated_at) FROM stdin;
1	Factura	t	2024-03-03 17:42:35.186241	2024-03-03 17:42:35.186241
2	Nota Credito	t	2024-11-23 00:56:01.632649	2024-11-23 00:56:01.632649
3	Nota Debito	t	2024-11-23 00:56:07.472006	2024-11-23 00:56:07.472006
4	Nota remision	t	2024-11-23 01:40:38.259898	2024-11-23 01:40:38.259898
\.


--
-- Data for Name: establishment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.establishment (id, name, active, created_at, updated_at, number) FROM stdin;
1	001	t	2024-03-03 17:42:46.964471	2024-03-03 17:42:46.964471	001
\.


--
-- Data for Name: expedition_point; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.expedition_point (id, name, active, created_at, updated_at, number) FROM stdin;
1	001	t	2024-03-03 17:47:15.747125	2024-03-03 17:47:15.747125	001
\.


--
-- Data for Name: invoice_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice_type (id, name, active, created_at, updated_at) FROM stdin;
1	Contado	t	2024-03-02 21:52:43.630944	2024-03-02 21:52:43.630944
2	Credito	t	2024-03-02 21:52:47.921887	2024-03-02 21:52:47.921887
\.


--
-- Data for Name: iva; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.iva (id, name, value, active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: payment_status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment_status (id, name, active, created_at, updated_at) FROM stdin;
1	COBRADO	f	2024-02-17 15:17:03.480736	2024-02-17 15:17:03.480736
2	Pendiente	t	2024-03-03 17:42:23.172618	2024-03-03 17:42:23.172618
\.


--
-- Data for Name: purchase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase (id, date, invoice_number, observation, stamping, "invoiceTypeId", "supplierId", "userId", active, created_at, updated_at, "purchaseOrderId") FROM stdin;
26	2024-11-17	123-123-1231232	\N	12312312	2	1	1	t	2024-11-17 20:18:53.516345	2024-11-17 20:18:53.516345	1
\.


--
-- Data for Name: purchase_budget; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_budget (id, date, observation, "userId", "supplierId", "purchasePedidoId", active, created_at, updated_at, budget_number) FROM stdin;
2	2024-11-11	test	1	1	1	t	2024-11-10 21:48:00.340929	2024-11-10 21:48:00.340929	132156
6	2024-11-17	\N	1	1	3	t	2024-11-17 08:29:41.09032	2024-11-17 08:29:41.09032	116-541-6545646
8	2024-11-17	test	1	1	7	t	2024-11-17 08:42:27.007297	2024-11-17 08:42:27.007297	564-879-7464987
5	2024-11-17	\N	1	1	2	f	2024-11-16 23:05:27.044512	2024-11-16 23:05:27.044512	001-001-0123654
\.


--
-- Data for Name: purchase_budget_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_budget_detail ("purchaseBudgetId", "conceptId", quantity, price) FROM stdin;
2	1	1	23
5	1	1	2000
6	1	1	4500000
8	1	1	20000
8	2	2	20000
\.


--
-- Data for Name: purchase_concept; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_concept ("purchaseId", "conceptId", quantity, price, taxes) FROM stdin;
26	1	1	4500000	{"title": "IVA 10", "amount": 409090.9090909091, "divider": 11, "percentage": 10}
\.


--
-- Data for Name: purchase_money_box_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_money_box_detail ("purchaseId", "strongboxId", amount) FROM stdin;
\.


--
-- Data for Name: purchase_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_order (id, date, observation, "userId", "supplierId", "purchaseBudgetId", active, created_at, updated_at, order_number) FROM stdin;
1	2024-11-11	ssssss	1	1	2	t	2024-11-10 21:59:40.860193	2024-11-10 21:59:40.860193	001-001-56498
3	2024-11-17	\N	1	1	6	t	2024-11-17 17:08:46.531168	2024-11-17 17:08:46.531168	146-498-7987979
4	2024-11-17	\N	1	1	8	t	2024-11-17 19:01:10.626508	2024-11-17 19:01:10.626508	154-979-8798798
\.


--
-- Data for Name: purchase_order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_order_detail ("purchaseOrderId", "conceptId", quantity, price) FROM stdin;
1	1	1	23
3	1	1	4500000
4	1	1	20000
4	2	2	20000
\.


--
-- Data for Name: purchase_pedido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_pedido (id, date, observation, "userId", active, created_at, updated_at) FROM stdin;
1	2024-11-10	SDFASDF	1	t	2024-11-10 20:40:01.789688	2024-11-10 20:40:01.789688
2	2024-11-17	\N	1	t	2024-11-16 23:05:00.821646	2024-11-16 23:05:00.821646
3	2024-11-17	\N	1	t	2024-11-16 23:10:20.34305	2024-11-16 23:10:20.34305
7	2024-11-17	TEST	1	t	2024-11-17 08:30:39.66803	2024-11-17 08:30:39.66803
8	2024-11-17	\N	1	t	2024-11-17 16:50:42.638257	2024-11-17 16:50:42.638257
\.


--
-- Data for Name: purchase_pedido_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_pedido_detail ("purchasePedidoId", "conceptId", quantity) FROM stdin;
1	1	3
2	2	3
3	1	1
7	1	1
7	2	2
8	1	1
\.


--
-- Data for Name: quota_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quota_type (id, name, value, type, active, created_at, updated_at) FROM stdin;
1	15 Dias	15	day	t	2024-03-17 21:00:57.439322	2024-03-17 21:00:57.439322
2	30 Dias	30	day	t	2024-03-17 21:01:13.583806	2024-03-17 21:01:13.583806
3	1 Mes	1	month	t	2024-03-29 21:27:51.664664	2024-03-29 21:27:51.664664
\.


--
-- Data for Name: remission_note_purchase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.remission_note_purchase (id, date, observation, "userId", timbrado, "remissionNoteNumber", "supplierId", "purchaseId", active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: remission_note_purchase_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.remission_note_purchase_detail ("remissionNotePurchaseId", "conceptId", quantity, price) FROM stdin;
\.


--
-- Data for Name: sale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale (id, date, invoice_number, observation, "stampingId", "invoiceTypeId", "customerId", "userId", active, created_at, updated_at) FROM stdin;
36	2024-03-06	1	\N	3	1	4	1	t	2024-03-06 19:22:22.650933	2024-03-06 19:22:22.650933
37	2024-03-06	2	\N	3	1	4	1	t	2024-03-06 20:33:04.23854	2024-03-06 20:33:04.23854
38	2024-03-06	3	\N	3	1	4	1	t	2024-03-06 20:35:26.377884	2024-03-06 20:35:26.377884
39	2024-03-07	4	\N	3	1	4	1	t	2024-03-07 09:33:15.647509	2024-03-07 09:33:15.647509
40	2024-03-07	5	\N	3	1	4	1	t	2024-03-07 09:34:12.348619	2024-03-07 09:34:12.348619
41	2024-04-03	6	\N	3	1	4	1	t	2024-04-03 17:55:58.345525	2024-04-03 17:55:58.345525
\.


--
-- Data for Name: sale_concept; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_concept ("saleId", "conceptId", quantity, price, taxes) FROM stdin;
36	1	2	4500000	{"title": "IVA 10", "amount": 818181.8181818182, "divider": 11, "percentage": 10}
37	1	2	4500000	{"title": "IVA 10", "amount": 818181.8181818182, "divider": 11, "percentage": 10}
38	1	2	4500000	{"title": "IVA 10", "amount": 818181.8181818182, "divider": 11, "percentage": 10}
39	1	1	4500000	{"title": "IVA 10", "amount": 409090.9090909091, "divider": 11, "percentage": 10}
40	1	1	4500000	{"title": "IVA 10", "amount": 409090.9090909091, "divider": 11, "percentage": 10}
41	1	1	4500000	{"title": "IVA 10", "amount": 409090.9090909091, "divider": 11, "percentage": 10}
\.


--
-- Data for Name: sale_credit_note; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_credit_note (id, date, observation, "creditNoteNumber", "userId", "stampingId", "customerId", "saleId", active, created_at, updated_at) FROM stdin;
1	2024-11-23	\N	1	1	4	4	37	t	2024-11-23 01:05:21.764163	2024-11-23 01:05:21.764163
\.


--
-- Data for Name: sale_credit_note_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_credit_note_detail ("saleCreditNoteId", "conceptId", quantity, price) FROM stdin;
1	1	2	32
\.


--
-- Data for Name: sale_debit_note; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_debit_note (id, date, observation, "debitNoteNumber", "userId", "stampingId", "customerId", "saleId", active, created_at, updated_at) FROM stdin;
1	2024-11-23	\N	1	1	5	4	36	t	2024-11-23 01:28:41.827255	2024-11-23 01:28:41.827255
\.


--
-- Data for Name: sale_debit_note_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_debit_note_detail ("saleDebitNoteId", "conceptId", quantity, price) FROM stdin;
1	1	1	123
\.


--
-- Data for Name: sale_pedido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_pedido (id, date, observation, "salePedidoNumber", "userId", "customerId", active, created_at, updated_at) FROM stdin;
1	2024-11-23	aasd	123-123-1231231	1	4	t	2024-11-22 22:38:31.297275	2024-11-22 22:38:31.297275
3	2024-11-23	\N	2	1	4	t	2024-11-22 23:44:04.715197	2024-11-22 23:44:04.715197
\.


--
-- Data for Name: sale_pedido_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_pedido_detail ("salePedidoId", "conceptId", quantity) FROM stdin;
1	1	123
1	2	2
3	1	3123
\.


--
-- Data for Name: sale_pedido_sale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_pedido_sale ("saleId", "salePedidoId") FROM stdin;
\.


--
-- Data for Name: sale_remission_note; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_remission_note (id, date, observation, "remissionNoteNumber", "userId", "stampingId", "customerId", "saleId", active, created_at, updated_at) FROM stdin;
1	2024-11-23	\N	1	1	6	4	36	t	2024-11-23 01:41:28.323209	2024-11-23 01:41:28.323209
\.


--
-- Data for Name: sale_remission_note_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale_remission_note_detail ("saleRemissionNoteId", "conceptId", quantity, price) FROM stdin;
1	1	1	12331
\.


--
-- Data for Name: service_budget; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_budget (id, date, observation, "customerId", "serviceTypeId", "userId", active, created_at, updated_at) FROM stdin;
14	2024-11-03	\N	4	1	1	t	2024-11-03 18:49:51.167599	2024-11-03 18:49:51.167599
15	2024-11-03	\N	4	1	1	t	2024-11-03 18:56:16.403402	2024-11-03 18:56:16.403402
16	2024-11-08	pedido a presupuesto	4	1	1	t	2024-11-08 18:27:12.421978	2024-11-08 18:27:12.421978
\.


--
-- Data for Name: service_budget_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_budget_detail ("serviceBudgetId", "conceptId", quantity, price) FROM stdin;
14	1	3	3543
15	1	234	5000
16	1	2	50000
\.


--
-- Data for Name: service_budget_diagnostic_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_budget_diagnostic_detail ("serviceBudgetId", "serviceDiagnosticId") FROM stdin;
14	7
\.


--
-- Data for Name: service_budget_order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_budget_order_detail ("serviceBudgetId", "serviceOrderId") FROM stdin;
15	3
16	4
\.


--
-- Data for Name: service_budget_request_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_budget_request_detail ("serviceBudgetId", "serviceRequestId") FROM stdin;
15	12
16	17
\.


--
-- Data for Name: service_claim; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_claim (id, "serviceContractId", observation, date, active, created_at, updated_at, description) FROM stdin;
\.


--
-- Data for Name: service_contract; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_contract (id, date, observation, "customerId", "userId", "serviceBudgetId", active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: service_contract_clausule; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_contract_clausule (id, "serviceContractId", description, observation) FROM stdin;
\.


--
-- Data for Name: service_diagnostic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_diagnostic (id, date, observation, "customerId", "userId", active, created_at, updated_at) FROM stdin;
7	2024-10-29	\N	4	1	t	2024-10-29 09:16:29.681626	2024-10-29 09:16:29.681626
8	2024-10-29	tatest	4	1	t	2024-10-29 09:17:20.114267	2024-10-29 09:17:20.114267
9	2024-11-08	\N	4	1	t	2024-11-08 18:28:08.28608	2024-11-08 18:28:08.28608
10	2024-11-23	\N	4	1	t	2024-11-23 08:49:57.360771	2024-11-23 08:49:57.360771
\.


--
-- Data for Name: service_diagnostic_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_diagnostic_detail (id, "serviceDiagnosticId", description, observation) FROM stdin;
6	7	234	2342342
2	8	edit	obs
1	9	falta pantalla nueva	pantalla nueva
1	10	camara no funciona	No funciona la camara
\.


--
-- Data for Name: service_discount; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_discount (id, "discountPercentage", active, created_at, updated_at, description) FROM stdin;
4	1	f	2024-10-29 13:53:41.399558	2024-10-29 13:53:41.399558	test
5	0	t	2024-10-29 13:58:53.101421	2024-10-29 13:58:53.101421	N/A
\.


--
-- Data for Name: service_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_order (id, date, observation, "customerId", "serviceTypeId", "userId", active, created_at, updated_at) FROM stdin;
1	2024-10-27	\N	4	1	1	t	2024-10-27 15:36:29.69393	2024-10-27 15:36:29.69393
2	2024-10-29	\N	4	1	1	t	2024-10-28 22:10:49.467519	2024-10-28 22:10:49.467519
3	2024-11-03	\N	4	1	1	t	2024-11-03 19:14:02.687731	2024-11-03 19:14:02.687731
4	2024-11-08	pedido a presupuesto	4	1	1	t	2024-11-08 18:27:39.41517	2024-11-08 18:27:39.41517
\.


--
-- Data for Name: service_order_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_order_detail ("serviceOrderId", "conceptId", quantity) FROM stdin;
1	1	1
2	1	1
3	1	234
4	1	2
\.


--
-- Data for Name: service_promotion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_promotion (id, "startDate", "endDate", name, "serviceTypeId", "discountPercentage", active, created_at, updated_at) FROM stdin;
1	2024-10-03	2024-10-05	asdfasd	1	3	f	2024-10-30 14:01:28.931329	2024-10-30 14:01:28.931329
\.


--
-- Data for Name: service_provided; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_provided (id, date, observation, "customerId", "userId", "serviceTypeId", "serviceOrderId", "serviceDiscountId", active, created_at, updated_at) FROM stdin;
7	2024-10-29	\N	4	1	1	1	5	f	2024-10-29 20:22:51.860867	2024-10-29 20:22:51.860867
4	2024-10-29	\N	4	1	1	1	5	f	2024-10-29 14:00:23.871001	2024-10-29 14:00:23.871001
6	2024-10-29	\N	4	1	1	1	5	f	2024-10-29 20:22:06.894075	2024-10-29 20:22:06.894075
8	2024-10-29	\N	4	1	1	1	5	f	2024-10-29 20:25:22.852803	2024-10-29 20:25:22.852803
5	2024-10-29	\N	4	1	1	1	5	f	2024-10-29 20:19:40.759111	2024-10-29 20:19:40.759111
9	2024-10-29	asdsf	4	1	1	1	5	t	2024-10-29 20:32:16.644391	2024-10-29 20:32:16.644391
\.


--
-- Data for Name: service_provided_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_provided_detail ("serviceProvidedId", "conceptId", quantity, price) FROM stdin;
9	1	2	23423
\.


--
-- Data for Name: service_request; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_request (id, date, observation, "customerId", "serviceTypeId", "userId", active, created_at, updated_at) FROM stdin;
12	2024-10-14	\N	4	1	1	t	2024-10-13 22:10:56.938835	2024-10-13 22:10:56.938835
16	2024-10-26	teeeee	4	1	1	t	2024-10-26 17:49:15.530474	2024-10-26 17:49:15.530474
17	2024-11-08	\N	4	1	1	t	2024-11-08 18:26:38.079519	2024-11-08 18:26:38.079519
\.


--
-- Data for Name: service_request_concept; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_request_concept ("serviceRequestId", "conceptId", "saleId") FROM stdin;
\.


--
-- Data for Name: service_request_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_request_detail ("serviceRequestId", "conceptId", quantity) FROM stdin;
12	1	234
16	2	1
16	1	2
17	1	2
\.


--
-- Data for Name: service_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_type (id, name, active, created_at, updated_at) FROM stdin;
1	Personales	t	2024-03-03 17:43:43.169101	2024-03-03 17:43:43.169101
\.


--
-- Data for Name: stamping; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stamping (id, name, active, number, "expeditionPointId", "establishmentId", created_at, updated_at, start_date, end_date, "documentTypeId") FROM stdin;
3	Punto de venta 1	t	123456	1	1	2024-03-03 23:18:26.594072	2024-03-03 23:18:26.594072	2024-03-04	2024-04-01	1
4	Punto de Venta 1	t	123457	1	1	2024-11-23 01:03:26.346753	2024-11-23 01:03:26.346753	2024-11-22	2025-01-31	2
5	Punto de Venta 1	t	123458	1	1	2024-11-23 01:25:53.016327	2024-11-23 01:25:53.016327	2024-11-23	2024-12-31	3
6	Punto Venta 1	t	123469	1	1	2024-11-23 01:41:09.537312	2024-11-23 01:41:09.537312	2024-11-22	2025-01-31	4
\.


--
-- Data for Name: strongbox; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strongbox (id, name, amount, "currencyId", active, created_at, updated_at) FROM stdin;
1	Caja 1	0	2	t	2024-03-03 17:41:57.548871	2024-03-03 17:41:57.548871
\.


--
-- Data for Name: supplier; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supplier (id, name, document, address, phone, email, "cityId", "districtId", active, created_at, updated_at, social_reason) FROM stdin;
1	Jorge	5903532-2	Campo 9	0975339891	ronyparra@test.com	2	1	t	2024-02-29 09:21:02.060074	2024-02-29 09:21:02.060074	TEST
\.


--
-- Data for Name: tax_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tax_type (id, name, active, created_at, updated_at, "valueDivider", percentage) FROM stdin;
2	IVA 10	t	2024-03-02 00:20:30.571089	2024-03-02 00:20:30.571089	11	10
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password, email, name, lastname, active, created_at, updated_at) FROM stdin;
3	test	$2b$10$LBZQ5FmiDk3R636I7uFYjOeUaeVBSwdN7KI.Ky7rVYRo9G386hUcK	test@test.com	TEST	TEST	t	2024-02-27 23:33:20.183644	2024-02-27 23:33:20.183644
1	rony	$2b$10$Fgrs5WPoorMlb8DIDj7V3OK22aQKa0Es0jNuQFfy2yQx/6wO0rw0.	rony@test.com	Rony	Parra	t	2024-02-17 13:59:40.47349	2024-02-17 13:59:40.47349
\.


--
-- Name: account_to_pay_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_to_pay_detail_id_seq', 2, true);


--
-- Name: account_to_pay_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.account_to_pay_id_seq', 6, true);


--
-- Name: brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brand_id_seq', 5, true);


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 4, true);


--
-- Name: city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.city_id_seq', 7, true);


--
-- Name: concept_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.concept_id_seq', 2, true);


--
-- Name: credit_note_purchase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.credit_note_purchase_id_seq', 2, true);


--
-- Name: currency_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.currency_id_seq', 4, true);


--
-- Name: customer_branch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_branch_id_seq', 1, true);


--
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 4, true);


--
-- Name: debit_note_purchase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.debit_note_purchase_id_seq', 1, true);


--
-- Name: district_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.district_id_seq', 2, true);


--
-- Name: document_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.document_type_id_seq', 4, true);


--
-- Name: establishment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.establishment_id_seq', 1, true);


--
-- Name: expedition_point_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expedition_point_id_seq', 1, true);


--
-- Name: invoice_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoice_type_id_seq', 2, true);


--
-- Name: iva_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.iva_id_seq', 1, false);


--
-- Name: payment_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_status_id_seq', 2, true);


--
-- Name: purchase_budget_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchase_budget_id_seq', 8, true);


--
-- Name: purchase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchase_id_seq', 26, true);


--
-- Name: purchase_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchase_order_id_seq', 4, true);


--
-- Name: purchase_pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchase_pedido_id_seq', 8, true);


--
-- Name: quota_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quota_type_id_seq', 3, true);


--
-- Name: remission_note_purchase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.remission_note_purchase_id_seq', 1, true);


--
-- Name: sale_credit_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_credit_note_id_seq', 1, true);


--
-- Name: sale_debit_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_debit_note_id_seq', 1, true);


--
-- Name: sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_id_seq', 41, true);


--
-- Name: sale_pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_pedido_id_seq', 3, true);


--
-- Name: sale_remission_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_remission_note_id_seq', 1, true);


--
-- Name: service_budget_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_budget_id_seq', 16, true);


--
-- Name: service_claim_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_claim_id_seq', 1, true);


--
-- Name: service_contract_clausule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_contract_clausule_id_seq', 2, true);


--
-- Name: service_contract_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_contract_id_seq', 1, true);


--
-- Name: service_diagnostic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_diagnostic_id_seq', 10, true);


--
-- Name: service_discount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_discount_id_seq', 5, true);


--
-- Name: service_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_order_id_seq', 4, true);


--
-- Name: service_promotion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_promotion_id_seq', 1, true);


--
-- Name: service_provided_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_provided_id_seq', 9, true);


--
-- Name: service_request_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_request_id_seq', 17, true);


--
-- Name: service_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.service_type_id_seq', 1, true);


--
-- Name: stamping_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stamping_id_seq', 6, true);


--
-- Name: strongbox_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strongbox_id_seq', 1, true);


--
-- Name: supplier_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.supplier_id_seq', 1, true);


--
-- Name: tax_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tax_type_id_seq', 3, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- Name: purchase_pedido_detail PK_024a0274dcca2aa53fa8b168148; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido_detail
    ADD CONSTRAINT "PK_024a0274dcca2aa53fa8b168148" PRIMARY KEY ("purchasePedidoId", "conceptId");


--
-- Name: service_request PK_08446fa58294cb2dd0b6ff9e5a7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request
    ADD CONSTRAINT "PK_08446fa58294cb2dd0b6ff9e5a7" PRIMARY KEY (id);


--
-- Name: invoice_type PK_08d507dd307f9969d147cd84c1b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_type
    ADD CONSTRAINT "PK_08d507dd307f9969d147cd84c1b" PRIMARY KEY (id);


--
-- Name: service_type PK_0a11a8d444eff1346826caed987; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_type
    ADD CONSTRAINT "PK_0a11a8d444eff1346826caed987" PRIMARY KEY (id);


--
-- Name: service_contract_clausule PK_0b38578b17ad5750e2422de6477; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract_clausule
    ADD CONSTRAINT "PK_0b38578b17ad5750e2422de6477" PRIMARY KEY (id, "serviceContractId");


--
-- Name: purchase_budget_detail PK_0cfe2a2dfaae66be8e771c04264; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget_detail
    ADD CONSTRAINT "PK_0cfe2a2dfaae66be8e771c04264" PRIMARY KEY ("purchaseBudgetId", "conceptId");


--
-- Name: iva PK_10d6075ce7b7cbb07938652327a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.iva
    ADD CONSTRAINT "PK_10d6075ce7b7cbb07938652327a" PRIMARY KEY (id);


--
-- Name: establishment PK_149bd9dc1f2bd4e825a0c474932; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.establishment
    ADD CONSTRAINT "PK_149bd9dc1f2bd4e825a0c474932" PRIMARY KEY (id);


--
-- Name: purchase_order_detail PK_177ad88089d2444a735a974c2bf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order_detail
    ADD CONSTRAINT "PK_177ad88089d2444a735a974c2bf" PRIMARY KEY ("purchaseOrderId", "conceptId");


--
-- Name: tax_type PK_1caf99bffff3bf7121b70614ff3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tax_type
    ADD CONSTRAINT "PK_1caf99bffff3bf7121b70614ff3" PRIMARY KEY (id);


--
-- Name: sale_remission_note_detail PK_1eb1802828cbbe55c6adf840ce6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note_detail
    ADD CONSTRAINT "PK_1eb1802828cbbe55c6adf840ce6" PRIMARY KEY ("saleRemissionNoteId", "conceptId");


--
-- Name: service_request_concept PK_1ef886a12f76d1b7f3367143b5c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request_concept
    ADD CONSTRAINT "PK_1ef886a12f76d1b7f3367143b5c" PRIMARY KEY ("serviceRequestId", "conceptId");


--
-- Name: purchase_budget PK_257ed19a43e31a942a6a8c68e61; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget
    ADD CONSTRAINT "PK_257ed19a43e31a942a6a8c68e61" PRIMARY KEY (id);


--
-- Name: service_budget_request_detail PK_2921773cbc64c48f04852575f83; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_request_detail
    ADD CONSTRAINT "PK_2921773cbc64c48f04852575f83" PRIMARY KEY ("serviceBudgetId", "serviceRequestId");


--
-- Name: supplier PK_2bc0d2cab6276144d2ff98a2828; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY (id);


--
-- Name: document_type PK_2e1aa55eac1947ddf3221506edb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.document_type
    ADD CONSTRAINT "PK_2e1aa55eac1947ddf3221506edb" PRIMARY KEY (id);


--
-- Name: purchase_money_box_detail PK_37d1fd5a78430b4187359e73f3b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_money_box_detail
    ADD CONSTRAINT "PK_37d1fd5a78430b4187359e73f3b" PRIMARY KEY ("purchaseId", "strongboxId");


--
-- Name: currency PK_3cda65c731a6264f0e444cc9b91; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currency
    ADD CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY (id);


--
-- Name: service_order_detail PK_3d90150fae43ba8c6c52ae2757f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order_detail
    ADD CONSTRAINT "PK_3d90150fae43ba8c6c52ae2757f" PRIMARY KEY ("serviceOrderId", "conceptId");


--
-- Name: service_request_detail PK_3ef42f89bdff033fdf955989517; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request_detail
    ADD CONSTRAINT "PK_3ef42f89bdff033fdf955989517" PRIMARY KEY ("serviceRequestId", "conceptId");


--
-- Name: service_claim PK_436db39e5750d4d6d22e96f3907; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_claim
    ADD CONSTRAINT "PK_436db39e5750d4d6d22e96f3907" PRIMARY KEY (id);


--
-- Name: sale_pedido_detail PK_4a1f02477618e2cd4ae140b7177; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_detail
    ADD CONSTRAINT "PK_4a1f02477618e2cd4ae140b7177" PRIMARY KEY ("salePedidoId", "conceptId");


--
-- Name: quota_type PK_4a4ad879547798676aae0d62315; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quota_type
    ADD CONSTRAINT "PK_4a4ad879547798676aae0d62315" PRIMARY KEY (id);


--
-- Name: account_to_pay_detail PK_4c2cf161dc8ad0f6f1c83be1db9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay_detail
    ADD CONSTRAINT "PK_4c2cf161dc8ad0f6f1c83be1db9" PRIMARY KEY (id, "accountToPayId", "purchaseId");


--
-- Name: account_to_pay PK_551b9d4cd8af388b85e8ca97a80; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay
    ADD CONSTRAINT "PK_551b9d4cd8af388b85e8ca97a80" PRIMARY KEY (id, "purchaseId");


--
-- Name: stamping PK_5707322d8acee1dd1456b3fc7a0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stamping
    ADD CONSTRAINT "PK_5707322d8acee1dd1456b3fc7a0" PRIMARY KEY (id);


--
-- Name: strongbox PK_62d85972d074c255ea219cfa3b8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strongbox
    ADD CONSTRAINT "PK_62d85972d074c255ea219cfa3b8" PRIMARY KEY (id);


--
-- Name: service_diagnostic_detail PK_634a2970a6741cfc7f3821c7f0f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic_detail
    ADD CONSTRAINT "PK_634a2970a6741cfc7f3821c7f0f" PRIMARY KEY (id, "serviceDiagnosticId");


--
-- Name: service_budget_detail PK_64c29459948f132d953c349230c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_detail
    ADD CONSTRAINT "PK_64c29459948f132d953c349230c" PRIMARY KEY ("serviceBudgetId", "conceptId");


--
-- Name: purchase_pedido PK_715b838248be8cbaa9cb7557919; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido
    ADD CONSTRAINT "PK_715b838248be8cbaa9cb7557919" PRIMARY KEY (id);


--
-- Name: sale_credit_note_detail PK_7487d83748c3a6b68d19eeb9d89; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note_detail
    ADD CONSTRAINT "PK_7487d83748c3a6b68d19eeb9d89" PRIMARY KEY ("saleCreditNoteId", "conceptId");


--
-- Name: sale_concept PK_77aa7bd4ee47e3bc1ed467efce8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_concept
    ADD CONSTRAINT "PK_77aa7bd4ee47e3bc1ed467efce8" PRIMARY KEY ("saleId", "conceptId");


--
-- Name: sale_remission_note PK_7ed6434c970778ca3d7f8285d11; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note
    ADD CONSTRAINT "PK_7ed6434c970778ca3d7f8285d11" PRIMARY KEY (id);


--
-- Name: concept PK_83c1330866b9866ac2d0ed2b36b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept
    ADD CONSTRAINT "PK_83c1330866b9866ac2d0ed2b36b" PRIMARY KEY (id);


--
-- Name: purchase PK_86cc2ebeb9e17fc9c0774b05f69; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT "PK_86cc2ebeb9e17fc9c0774b05f69" PRIMARY KEY (id);


--
-- Name: sale_debit_note PK_8741cd55d0509ccf545dd2e9d97; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note
    ADD CONSTRAINT "PK_8741cd55d0509ccf545dd2e9d97" PRIMARY KEY (id);


--
-- Name: service_diagnostic PK_985b63932e3677e9c57b938a60d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic
    ADD CONSTRAINT "PK_985b63932e3677e9c57b938a60d" PRIMARY KEY (id);


--
-- Name: category PK_9c4e4a89e3674fc9f382d733f03; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);


--
-- Name: purchase_concept PK_a57b218899d37362598fa453748; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_concept
    ADD CONSTRAINT "PK_a57b218899d37362598fa453748" PRIMARY KEY ("purchaseId", "conceptId");


--
-- Name: brand PK_a5d20765ddd942eb5de4eee2d7f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY (id);


--
-- Name: customer PK_a7a13f4cacb744524e44dfdad32; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY (id);


--
-- Name: service_budget_order_detail PK_ac69c5eeedccbc1b198b4c70abb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_order_detail
    ADD CONSTRAINT "PK_ac69c5eeedccbc1b198b4c70abb" PRIMARY KEY ("serviceBudgetId", "serviceOrderId");


--
-- Name: purchase_order PK_ad3e1c7b862f4043b103a6c8c60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order
    ADD CONSTRAINT "PK_ad3e1c7b862f4043b103a6c8c60" PRIMARY KEY (id);


--
-- Name: service_order PK_b01a59b48a0dfbd84dd8221364a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order
    ADD CONSTRAINT "PK_b01a59b48a0dfbd84dd8221364a" PRIMARY KEY (id);


--
-- Name: city PK_b222f51ce26f7e5ca86944a6739; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY (id);


--
-- Name: credit_note_purchase PK_b421f0b2a7b61b4a3ff503c3ebb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase
    ADD CONSTRAINT "PK_b421f0b2a7b61b4a3ff503c3ebb" PRIMARY KEY (id);


--
-- Name: payment_status PK_b59e2e874b077ea7acf724e4711; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment_status
    ADD CONSTRAINT "PK_b59e2e874b077ea7acf724e4711" PRIMARY KEY (id);


--
-- Name: service_budget_diagnostic_detail PK_ba59784c257f176daeb3948a395; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_diagnostic_detail
    ADD CONSTRAINT "PK_ba59784c257f176daeb3948a395" PRIMARY KEY ("serviceBudgetId", "serviceDiagnosticId");


--
-- Name: expedition_point PK_bab83d3b689603cf8ddda21c423; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expedition_point
    ADD CONSTRAINT "PK_bab83d3b689603cf8ddda21c423" PRIMARY KEY (id);


--
-- Name: credit_note_purchase_detail PK_bb124c8ea07c867177ffa1bf15b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase_detail
    ADD CONSTRAINT "PK_bb124c8ea07c867177ffa1bf15b" PRIMARY KEY ("creditNotePurchaseId", "conceptId");


--
-- Name: service_provided PK_be55b6881355659279926a0990b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "PK_be55b6881355659279926a0990b" PRIMARY KEY (id);


--
-- Name: debit_note_purchase PK_bfb7229e3723494e306e22914d9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase
    ADD CONSTRAINT "PK_bfb7229e3723494e306e22914d9" PRIMARY KEY (id);


--
-- Name: debit_note_purchase_detail PK_c69d919b458b9a38496d2946d64; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase_detail
    ADD CONSTRAINT "PK_c69d919b458b9a38496d2946d64" PRIMARY KEY ("debitNotePurchaseId", "conceptId");


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: service_budget PK_cb7db3feae6e2181fc7f0067071; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget
    ADD CONSTRAINT "PK_cb7db3feae6e2181fc7f0067071" PRIMARY KEY (id);


--
-- Name: service_discount PK_cc67b4ecd77b1e878ffd993e332; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_discount
    ADD CONSTRAINT "PK_cc67b4ecd77b1e878ffd993e332" PRIMARY KEY (id);


--
-- Name: remission_note_purchase PK_ccd37e33ceac4e27b551a13b511; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase
    ADD CONSTRAINT "PK_ccd37e33ceac4e27b551a13b511" PRIMARY KEY (id);


--
-- Name: service_provided_detail PK_cf0ad2d7a0d6cad32431cf8b2ca; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided_detail
    ADD CONSTRAINT "PK_cf0ad2d7a0d6cad32431cf8b2ca" PRIMARY KEY ("serviceProvidedId", "conceptId");


--
-- Name: sale PK_d03891c457cbcd22974732b5de2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY (id);


--
-- Name: service_promotion PK_d7d409da64e4e527c9cfac8f88e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_promotion
    ADD CONSTRAINT "PK_d7d409da64e4e527c9cfac8f88e" PRIMARY KEY (id);


--
-- Name: sale_pedido PK_dbd413f5efacf4cd79359cef89e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido
    ADD CONSTRAINT "PK_dbd413f5efacf4cd79359cef89e" PRIMARY KEY (id);


--
-- Name: remission_note_purchase_detail PK_e2b2419c4def1d4dd659b1d26f2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase_detail
    ADD CONSTRAINT "PK_e2b2419c4def1d4dd659b1d26f2" PRIMARY KEY ("remissionNotePurchaseId", "conceptId");


--
-- Name: sale_credit_note PK_e64735deeec2c08d051b9a1df65; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note
    ADD CONSTRAINT "PK_e64735deeec2c08d051b9a1df65" PRIMARY KEY (id);


--
-- Name: customer_branch PK_e8ff19b651ee2dfcb7837864dad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_branch
    ADD CONSTRAINT "PK_e8ff19b651ee2dfcb7837864dad" PRIMARY KEY (id);


--
-- Name: district PK_ee5cb6fd5223164bb87ea693f1e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.district
    ADD CONSTRAINT "PK_ee5cb6fd5223164bb87ea693f1e" PRIMARY KEY (id);


--
-- Name: sale_pedido_sale PK_f414a0fc04237e53bbc746bb6bf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_sale
    ADD CONSTRAINT "PK_f414a0fc04237e53bbc746bb6bf" PRIMARY KEY ("saleId", "salePedidoId");


--
-- Name: sale_debit_note_detail PK_fc4d074bc555148a12deb92e82f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note_detail
    ADD CONSTRAINT "PK_fc4d074bc555148a12deb92e82f" PRIMARY KEY ("saleDebitNoteId", "conceptId");


--
-- Name: service_contract PK_ff58318f8230b8053067edd0343; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract
    ADD CONSTRAINT "PK_ff58318f8230b8053067edd0343" PRIMARY KEY (id);


--
-- Name: account_to_pay FK_00d19800f36588514fe36c95124; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay
    ADD CONSTRAINT "FK_00d19800f36588514fe36c95124" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_remission_note FK_07323e3a23da7525a38650ed614; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note
    ADD CONSTRAINT "FK_07323e3a23da7525a38650ed614" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_pedido FK_095a745d231753e9f045d842f28; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido
    ADD CONSTRAINT "FK_095a745d231753e9f045d842f28" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_remission_note_detail FK_09c3549994d36a56b67c9efb7fa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note_detail
    ADD CONSTRAINT "FK_09c3549994d36a56b67c9efb7fa" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: service_budget_request_detail FK_0cea8e66bdec1fa66c4c528805c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_request_detail
    ADD CONSTRAINT "FK_0cea8e66bdec1fa66c4c528805c" FOREIGN KEY ("serviceRequestId") REFERENCES public.service_request(id) ON DELETE CASCADE;


--
-- Name: purchase_pedido_detail FK_0cf18d422b709b4107f9b03a3ae; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido_detail
    ADD CONSTRAINT "FK_0cf18d422b709b4107f9b03a3ae" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: service_request_detail FK_10f7c3bcce78e8bd2fa093c8d38; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request_detail
    ADD CONSTRAINT "FK_10f7c3bcce78e8bd2fa093c8d38" FOREIGN KEY ("serviceRequestId") REFERENCES public.service_request(id) ON DELETE CASCADE;


--
-- Name: concept FK_11a6a28b147666b80cd66e37311; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept
    ADD CONSTRAINT "FK_11a6a28b147666b80cd66e37311" FOREIGN KEY ("currencyId") REFERENCES public.currency(id) ON UPDATE CASCADE;


--
-- Name: debit_note_purchase_detail FK_11f9a37d56eab14fa5ce06d1667; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase_detail
    ADD CONSTRAINT "FK_11f9a37d56eab14fa5ce06d1667" FOREIGN KEY ("debitNotePurchaseId") REFERENCES public.debit_note_purchase(id) ON DELETE CASCADE;


--
-- Name: debit_note_purchase FK_12cd2932b73af9561eb24f2f05c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase
    ADD CONSTRAINT "FK_12cd2932b73af9561eb24f2f05c" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: purchase_money_box_detail FK_1324760f65c81cb4ab170fc2c4a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_money_box_detail
    ADD CONSTRAINT "FK_1324760f65c81cb4ab170fc2c4a" FOREIGN KEY ("strongboxId") REFERENCES public.strongbox(id);


--
-- Name: debit_note_purchase_detail FK_13c6306e32d478c6997414dbb9b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase_detail
    ADD CONSTRAINT "FK_13c6306e32d478c6997414dbb9b" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: sale_concept FK_13c91aae9deed9529dea58a745b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_concept
    ADD CONSTRAINT "FK_13c91aae9deed9529dea58a745b" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: district FK_148f1c944d0fec4114a54984da1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.district
    ADD CONSTRAINT "FK_148f1c944d0fec4114a54984da1" FOREIGN KEY ("cityId") REFERENCES public.city(id) ON UPDATE CASCADE;


--
-- Name: sale_credit_note FK_1531bbca9c76bef851c197abe5f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note
    ADD CONSTRAINT "FK_1531bbca9c76bef851c197abe5f" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: service_budget_order_detail FK_1753e59ebbfb763acd6f72f8aac; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_order_detail
    ADD CONSTRAINT "FK_1753e59ebbfb763acd6f72f8aac" FOREIGN KEY ("serviceBudgetId") REFERENCES public.service_budget(id) ON DELETE CASCADE;


--
-- Name: service_budget_detail FK_1a3347bf26ecc45a846f6c114d5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_detail
    ADD CONSTRAINT "FK_1a3347bf26ecc45a846f6c114d5" FOREIGN KEY ("serviceBudgetId") REFERENCES public.service_budget(id) ON DELETE CASCADE;


--
-- Name: stamping FK_1d1e5a7b60520ab7eecff414796; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stamping
    ADD CONSTRAINT "FK_1d1e5a7b60520ab7eecff414796" FOREIGN KEY ("documentTypeId") REFERENCES public.document_type(id) ON UPDATE CASCADE;


--
-- Name: service_contract FK_1dad5be7b66bd392fdffcac176d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract
    ADD CONSTRAINT "FK_1dad5be7b66bd392fdffcac176d" FOREIGN KEY ("serviceBudgetId") REFERENCES public.service_budget(id) ON UPDATE CASCADE;


--
-- Name: service_diagnostic FK_23e544d0da1d7a77901473cc756; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic
    ADD CONSTRAINT "FK_23e544d0da1d7a77901473cc756" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: sale_debit_note FK_253ed5bc460dd8b3770f3d6e3db; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note
    ADD CONSTRAINT "FK_253ed5bc460dd8b3770f3d6e3db" FOREIGN KEY ("saleId") REFERENCES public.sale(id) ON UPDATE CASCADE;


--
-- Name: credit_note_purchase FK_269fe04be56cd27974cc19410d1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase
    ADD CONSTRAINT "FK_269fe04be56cd27974cc19410d1" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: customer FK_28c986cf3a805eeead2e2af90c9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "FK_28c986cf3a805eeead2e2af90c9" FOREIGN KEY ("cityId") REFERENCES public.city(id) ON UPDATE CASCADE;


--
-- Name: service_provided FK_2c079352cb11a5c01b581de5713; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "FK_2c079352cb11a5c01b581de5713" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: concept FK_2d58326d8d5c9c01b1563253d22; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept
    ADD CONSTRAINT "FK_2d58326d8d5c9c01b1563253d22" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE;


--
-- Name: customer_branch FK_2d6557f374740cca98e69556969; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_branch
    ADD CONSTRAINT "FK_2d6557f374740cca98e69556969" FOREIGN KEY ("districtId") REFERENCES public.district(id) ON UPDATE CASCADE;


--
-- Name: service_diagnostic FK_2e0482cb23ab7ceffca14970069; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic
    ADD CONSTRAINT "FK_2e0482cb23ab7ceffca14970069" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: service_order_detail FK_32a098e610e29c35cfdc8e502ed; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order_detail
    ADD CONSTRAINT "FK_32a098e610e29c35cfdc8e502ed" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: purchase FK_33520b6c46e1b3971c0a649d38b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT "FK_33520b6c46e1b3971c0a649d38b" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: purchase_concept FK_339bcd32e2d9569e698fedc8fb0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_concept
    ADD CONSTRAINT "FK_339bcd32e2d9569e698fedc8fb0" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: service_budget_request_detail FK_35d6bdc6141168c0ae8734f66e3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_request_detail
    ADD CONSTRAINT "FK_35d6bdc6141168c0ae8734f66e3" FOREIGN KEY ("serviceBudgetId") REFERENCES public.service_budget(id) ON DELETE CASCADE;


--
-- Name: service_order_detail FK_363f6defc4c985bfe550ba2fdef; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order_detail
    ADD CONSTRAINT "FK_363f6defc4c985bfe550ba2fdef" FOREIGN KEY ("serviceOrderId") REFERENCES public.service_order(id) ON DELETE CASCADE;


--
-- Name: sale FK_36815033e4a40f054e5abe196d7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT "FK_36815033e4a40f054e5abe196d7" FOREIGN KEY ("invoiceTypeId") REFERENCES public.invoice_type(id) ON UPDATE CASCADE;


--
-- Name: purchase_concept FK_37bb1d5a93e710a51a0acc91a3c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_concept
    ADD CONSTRAINT "FK_37bb1d5a93e710a51a0acc91a3c" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON DELETE CASCADE;


--
-- Name: sale_pedido_detail FK_3a4529c4eef84e9d394cc40a977; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_detail
    ADD CONSTRAINT "FK_3a4529c4eef84e9d394cc40a977" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: service_claim FK_3b692b9e8fff93caf5adbb8c167; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_claim
    ADD CONSTRAINT "FK_3b692b9e8fff93caf5adbb8c167" FOREIGN KEY ("serviceContractId") REFERENCES public.service_contract(id) ON DELETE CASCADE;


--
-- Name: sale_pedido_detail FK_3d7716eb6aad7e3fb93400a3149; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_detail
    ADD CONSTRAINT "FK_3d7716eb6aad7e3fb93400a3149" FOREIGN KEY ("salePedidoId") REFERENCES public.sale_pedido(id) ON DELETE CASCADE;


--
-- Name: remission_note_purchase FK_4107e07e9a2525c27ba39bf9a27; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase
    ADD CONSTRAINT "FK_4107e07e9a2525c27ba39bf9a27" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON UPDATE CASCADE;


--
-- Name: service_provided_detail FK_4366ad43989697a4e65ddbd3d4a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided_detail
    ADD CONSTRAINT "FK_4366ad43989697a4e65ddbd3d4a" FOREIGN KEY ("serviceProvidedId") REFERENCES public.service_provided(id) ON DELETE CASCADE;


--
-- Name: service_order FK_49b5a0c2c4adb037d7835c9c61a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order
    ADD CONSTRAINT "FK_49b5a0c2c4adb037d7835c9c61a" FOREIGN KEY ("serviceTypeId") REFERENCES public.service_type(id) ON UPDATE CASCADE;


--
-- Name: service_provided FK_4fd526c6fb6590be00269f73a63; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "FK_4fd526c6fb6590be00269f73a63" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: purchase_budget FK_5107620a9fd3ce514b7295974ec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget
    ADD CONSTRAINT "FK_5107620a9fd3ce514b7295974ec" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: strongbox FK_531628aed6171dd37ce6eca5309; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strongbox
    ADD CONSTRAINT "FK_531628aed6171dd37ce6eca5309" FOREIGN KEY ("currencyId") REFERENCES public.currency(id) ON UPDATE CASCADE;


--
-- Name: sale_credit_note_detail FK_534bd81bc5e227dd19426055965; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note_detail
    ADD CONSTRAINT "FK_534bd81bc5e227dd19426055965" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: credit_note_purchase FK_5e618041de17d16c04d1dbc1fa4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase
    ADD CONSTRAINT "FK_5e618041de17d16c04d1dbc1fa4" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON UPDATE CASCADE;


--
-- Name: purchase_pedido FK_63d2dd02e2aaca35793d3a3b27f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido
    ADD CONSTRAINT "FK_63d2dd02e2aaca35793d3a3b27f" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: credit_note_purchase_detail FK_6721e6d3407a6d719c7ee64537f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase_detail
    ADD CONSTRAINT "FK_6721e6d3407a6d719c7ee64537f" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: sale_pedido_sale FK_6a5721e868644be5227819c70a1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_sale
    ADD CONSTRAINT "FK_6a5721e868644be5227819c70a1" FOREIGN KEY ("saleId") REFERENCES public.sale(id) ON DELETE CASCADE;


--
-- Name: service_request FK_6b4009f335a6638fa3920e8ed09; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request
    ADD CONSTRAINT "FK_6b4009f335a6638fa3920e8ed09" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: service_order FK_6b466455daea595214559c26c90; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order
    ADD CONSTRAINT "FK_6b466455daea595214559c26c90" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: purchase_budget_detail FK_6be42ff96330e85838ac7401b67; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget_detail
    ADD CONSTRAINT "FK_6be42ff96330e85838ac7401b67" FOREIGN KEY ("purchaseBudgetId") REFERENCES public.purchase_budget(id) ON DELETE CASCADE;


--
-- Name: sale_credit_note_detail FK_75e0b61412b3bfcbaeff9b76d20; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note_detail
    ADD CONSTRAINT "FK_75e0b61412b3bfcbaeff9b76d20" FOREIGN KEY ("saleCreditNoteId") REFERENCES public.sale_credit_note(id) ON DELETE CASCADE;


--
-- Name: purchase_order FK_7680e5bc188285cb675473a60fd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order
    ADD CONSTRAINT "FK_7680e5bc188285cb675473a60fd" FOREIGN KEY ("purchaseBudgetId") REFERENCES public.purchase_budget(id) ON UPDATE CASCADE;


--
-- Name: service_budget_diagnostic_detail FK_77a9a726e922ec2a2414500a5ae; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_diagnostic_detail
    ADD CONSTRAINT "FK_77a9a726e922ec2a2414500a5ae" FOREIGN KEY ("serviceBudgetId") REFERENCES public.service_budget(id) ON DELETE CASCADE;


--
-- Name: remission_note_purchase FK_7e7d33b2e441611f9cc5686a127; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase
    ADD CONSTRAINT "FK_7e7d33b2e441611f9cc5686a127" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: customer_branch FK_7fd19943612d1c9bed51b535f45; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_branch
    ADD CONSTRAINT "FK_7fd19943612d1c9bed51b535f45" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: account_to_pay FK_8016007ada6bffe555d9f316cb7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay
    ADD CONSTRAINT "FK_8016007ada6bffe555d9f316cb7" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON UPDATE CASCADE;


--
-- Name: supplier FK_82cb75e968b854b8cc5ecff014e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT "FK_82cb75e968b854b8cc5ecff014e" FOREIGN KEY ("cityId") REFERENCES public.city(id) ON UPDATE CASCADE;


--
-- Name: service_budget FK_836fa76fefb0ebcc026eec506fd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget
    ADD CONSTRAINT "FK_836fa76fefb0ebcc026eec506fd" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: service_request FK_84b23f74c9b2b59c2a6dc740432; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request
    ADD CONSTRAINT "FK_84b23f74c9b2b59c2a6dc740432" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: service_order FK_86d40c3585c372cd360af8a7633; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_order
    ADD CONSTRAINT "FK_86d40c3585c372cd360af8a7633" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: stamping FK_86d63ed140c0fdc68447e83524e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stamping
    ADD CONSTRAINT "FK_86d63ed140c0fdc68447e83524e" FOREIGN KEY ("expeditionPointId") REFERENCES public.expedition_point(id) ON UPDATE CASCADE;


--
-- Name: purchase_order_detail FK_8da67d8be88e9d95b40f0f0931b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order_detail
    ADD CONSTRAINT "FK_8da67d8be88e9d95b40f0f0931b" FOREIGN KEY ("purchaseOrderId") REFERENCES public.purchase_order(id) ON DELETE CASCADE;


--
-- Name: purchase_pedido_detail FK_8dfda5a6fcd98079cbc3d8d87c6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_pedido_detail
    ADD CONSTRAINT "FK_8dfda5a6fcd98079cbc3d8d87c6" FOREIGN KEY ("purchasePedidoId") REFERENCES public.purchase_pedido(id) ON DELETE CASCADE;


--
-- Name: service_provided FK_8dff5cbf5a2725cb56ee65d8500; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "FK_8dff5cbf5a2725cb56ee65d8500" FOREIGN KEY ("serviceOrderId") REFERENCES public.service_order(id) ON UPDATE CASCADE;


--
-- Name: service_contract FK_9664a493ab6f25b09d26b77946d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract
    ADD CONSTRAINT "FK_9664a493ab6f25b09d26b77946d" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_credit_note FK_977a1152fa6dbfd566b317ec024; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note
    ADD CONSTRAINT "FK_977a1152fa6dbfd566b317ec024" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: service_diagnostic_detail FK_9bbe1082bf5404e55875b7cd95a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_diagnostic_detail
    ADD CONSTRAINT "FK_9bbe1082bf5404e55875b7cd95a" FOREIGN KEY ("serviceDiagnosticId") REFERENCES public.service_diagnostic(id) ON DELETE CASCADE;


--
-- Name: remission_note_purchase FK_9bc611afdbfb5285f1078156f78; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase
    ADD CONSTRAINT "FK_9bc611afdbfb5285f1078156f78" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: service_promotion FK_9c695a9ad10396b947825789269; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_promotion
    ADD CONSTRAINT "FK_9c695a9ad10396b947825789269" FOREIGN KEY ("serviceTypeId") REFERENCES public.service_type(id) ON UPDATE CASCADE;


--
-- Name: credit_note_purchase_detail FK_9d772d346430d24896caa0d6f19; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase_detail
    ADD CONSTRAINT "FK_9d772d346430d24896caa0d6f19" FOREIGN KEY ("creditNotePurchaseId") REFERENCES public.credit_note_purchase(id) ON DELETE CASCADE;


--
-- Name: purchase_budget_detail FK_9dddc39d6bccdfbac6a543c0256; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget_detail
    ADD CONSTRAINT "FK_9dddc39d6bccdfbac6a543c0256" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: purchase_budget FK_a26a6e81b8c9d9aa6a61e1653cf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget
    ADD CONSTRAINT "FK_a26a6e81b8c9d9aa6a61e1653cf" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: service_contract_clausule FK_a311229831b909bd27a47bc20c1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract_clausule
    ADD CONSTRAINT "FK_a311229831b909bd27a47bc20c1" FOREIGN KEY ("serviceContractId") REFERENCES public.service_contract(id) ON DELETE CASCADE;


--
-- Name: sale_remission_note_detail FK_a359b3c803192f6ee08a7e05242; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note_detail
    ADD CONSTRAINT "FK_a359b3c803192f6ee08a7e05242" FOREIGN KEY ("saleRemissionNoteId") REFERENCES public.sale_remission_note(id) ON DELETE CASCADE;


--
-- Name: service_budget_detail FK_a45cf92266acd39e4ae9c651402; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_detail
    ADD CONSTRAINT "FK_a45cf92266acd39e4ae9c651402" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: sale_debit_note_detail FK_a5b57bc201fa9efabdcdc5006d0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note_detail
    ADD CONSTRAINT "FK_a5b57bc201fa9efabdcdc5006d0" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: sale FK_a742b91c1b99a4269c102d47541; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT "FK_a742b91c1b99a4269c102d47541" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: customer_branch FK_aa3c8c4a3e3820f6e2daf00d539; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_branch
    ADD CONSTRAINT "FK_aa3c8c4a3e3820f6e2daf00d539" FOREIGN KEY ("cityId") REFERENCES public.city(id) ON UPDATE CASCADE;


--
-- Name: sale_remission_note FK_ab20b699c71479de612336fc485; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note
    ADD CONSTRAINT "FK_ab20b699c71479de612336fc485" FOREIGN KEY ("stampingId") REFERENCES public.stamping(id) ON UPDATE CASCADE;


--
-- Name: sale_remission_note FK_ab973253f761c9f603dff744bcc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note
    ADD CONSTRAINT "FK_ab973253f761c9f603dff744bcc" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: concept FK_ae24c75b95bc64d81ea3ec6c641; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.concept
    ADD CONSTRAINT "FK_ae24c75b95bc64d81ea3ec6c641" FOREIGN KEY ("taxTypeId") REFERENCES public.tax_type(id) ON UPDATE CASCADE;


--
-- Name: sale_credit_note FK_afcfaf9c0e86ecabf1ebb049cd9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note
    ADD CONSTRAINT "FK_afcfaf9c0e86ecabf1ebb049cd9" FOREIGN KEY ("saleId") REFERENCES public.sale(id) ON UPDATE CASCADE;


--
-- Name: sale_concept FK_b103df0874781481832173df737; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_concept
    ADD CONSTRAINT "FK_b103df0874781481832173df737" FOREIGN KEY ("saleId") REFERENCES public.sale(id) ON DELETE CASCADE;


--
-- Name: service_provided FK_b39b806783b3b74172334867689; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "FK_b39b806783b3b74172334867689" FOREIGN KEY ("serviceDiscountId") REFERENCES public.service_discount(id) ON UPDATE CASCADE;


--
-- Name: service_request FK_b4ddb9fae696ce9549283aa4972; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request
    ADD CONSTRAINT "FK_b4ddb9fae696ce9549283aa4972" FOREIGN KEY ("serviceTypeId") REFERENCES public.service_type(id) ON UPDATE CASCADE;


--
-- Name: purchase FK_b4ee84e23fdff57bb8bfefbf998; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT "FK_b4ee84e23fdff57bb8bfefbf998" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: account_to_pay_detail FK_b59b072bba5bac81e34c8a8b377; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_to_pay_detail
    ADD CONSTRAINT "FK_b59b072bba5bac81e34c8a8b377" FOREIGN KEY ("accountToPayId", "purchaseId") REFERENCES public.account_to_pay(id, "purchaseId") ON DELETE CASCADE;


--
-- Name: service_budget_order_detail FK_b5ccb1c0ee72481ed0b5aada015; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_order_detail
    ADD CONSTRAINT "FK_b5ccb1c0ee72481ed0b5aada015" FOREIGN KEY ("serviceOrderId") REFERENCES public.service_order(id) ON DELETE CASCADE;


--
-- Name: service_budget FK_b693c846daf70313a82e9d24573; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget
    ADD CONSTRAINT "FK_b693c846daf70313a82e9d24573" FOREIGN KEY ("serviceTypeId") REFERENCES public.service_type(id) ON UPDATE CASCADE;


--
-- Name: sale_credit_note FK_b69c15bd3c81f965a5fbc6bd2e6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_credit_note
    ADD CONSTRAINT "FK_b69c15bd3c81f965a5fbc6bd2e6" FOREIGN KEY ("stampingId") REFERENCES public.stamping(id) ON UPDATE CASCADE;


--
-- Name: service_provided_detail FK_b73d92da33a9d17a60b51d7ed8f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided_detail
    ADD CONSTRAINT "FK_b73d92da33a9d17a60b51d7ed8f" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: remission_note_purchase_detail FK_baeaa192000c4ef8e9c9726cf2a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase_detail
    ADD CONSTRAINT "FK_baeaa192000c4ef8e9c9726cf2a" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: remission_note_purchase_detail FK_bc4df81b41af8da178122a727cd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remission_note_purchase_detail
    ADD CONSTRAINT "FK_bc4df81b41af8da178122a727cd" FOREIGN KEY ("remissionNotePurchaseId") REFERENCES public.remission_note_purchase(id) ON DELETE CASCADE;


--
-- Name: sale_remission_note FK_bdba767731aea73059ec00c124b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_remission_note
    ADD CONSTRAINT "FK_bdba767731aea73059ec00c124b" FOREIGN KEY ("saleId") REFERENCES public.sale(id) ON UPDATE CASCADE;


--
-- Name: sale FK_bf176f13c0bce3c693b24523794; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT "FK_bf176f13c0bce3c693b24523794" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_debit_note_detail FK_c13136c19fcf8fab5764b5f559c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note_detail
    ADD CONSTRAINT "FK_c13136c19fcf8fab5764b5f559c" FOREIGN KEY ("saleDebitNoteId") REFERENCES public.sale_debit_note(id) ON DELETE CASCADE;


--
-- Name: service_contract FK_c1c3caf4930472a55a3d26d4d1b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_contract
    ADD CONSTRAINT "FK_c1c3caf4930472a55a3d26d4d1b" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: service_provided FK_d1a5d801e585f2123003df8737f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_provided
    ADD CONSTRAINT "FK_d1a5d801e585f2123003df8737f" FOREIGN KEY ("serviceTypeId") REFERENCES public.service_type(id) ON UPDATE CASCADE;


--
-- Name: sale_debit_note FK_d255903547c66d1f9ff979354c8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note
    ADD CONSTRAINT "FK_d255903547c66d1f9ff979354c8" FOREIGN KEY ("stampingId") REFERENCES public.stamping(id) ON UPDATE CASCADE;


--
-- Name: debit_note_purchase FK_d2c13b83459d33b9d91242be06b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase
    ADD CONSTRAINT "FK_d2c13b83459d33b9d91242be06b" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON UPDATE CASCADE;


--
-- Name: service_request_detail FK_d55a76dbba35251fdbff2288b32; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request_detail
    ADD CONSTRAINT "FK_d55a76dbba35251fdbff2288b32" FOREIGN KEY ("conceptId") REFERENCES public.concept(id) ON DELETE CASCADE;


--
-- Name: debit_note_purchase FK_d7b348aa1f9dd4a733e16624a78; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.debit_note_purchase
    ADD CONSTRAINT "FK_d7b348aa1f9dd4a733e16624a78" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: purchase FK_dc2bbde9c83e3101acd8f4f73fb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT "FK_dc2bbde9c83e3101acd8f4f73fb" FOREIGN KEY ("invoiceTypeId") REFERENCES public.invoice_type(id) ON UPDATE CASCADE;


--
-- Name: purchase FK_dc978774ba499eb5821df6d1b8d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT "FK_dc978774ba499eb5821df6d1b8d" FOREIGN KEY ("purchaseOrderId") REFERENCES public.purchase_order(id) ON UPDATE CASCADE;


--
-- Name: purchase_budget FK_df034d9fe68d3ebaa8751574a46; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_budget
    ADD CONSTRAINT "FK_df034d9fe68d3ebaa8751574a46" FOREIGN KEY ("purchasePedidoId") REFERENCES public.purchase_pedido(id) ON UPDATE CASCADE;


--
-- Name: service_budget FK_e210764fd52975089053b9ef950; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget
    ADD CONSTRAINT "FK_e210764fd52975089053b9ef950" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: purchase_order FK_e3292b9fe0788404b5cc3b4efd5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order
    ADD CONSTRAINT "FK_e3292b9fe0788404b5cc3b4efd5" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: customer FK_e3429020141f78725aafc67df08; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT "FK_e3429020141f78725aafc67df08" FOREIGN KEY ("districtId") REFERENCES public.district(id) ON UPDATE CASCADE;


--
-- Name: purchase_order FK_e4ea5841622429c12889a487f31; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order
    ADD CONSTRAINT "FK_e4ea5841622429c12889a487f31" FOREIGN KEY ("supplierId") REFERENCES public.supplier(id) ON UPDATE CASCADE;


--
-- Name: service_budget_diagnostic_detail FK_ea68441422b5bd5aca081abb821; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_budget_diagnostic_detail
    ADD CONSTRAINT "FK_ea68441422b5bd5aca081abb821" FOREIGN KEY ("serviceDiagnosticId") REFERENCES public.service_diagnostic(id) ON DELETE CASCADE;


--
-- Name: stamping FK_eb58d1dfd48327359d965c33569; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stamping
    ADD CONSTRAINT "FK_eb58d1dfd48327359d965c33569" FOREIGN KEY ("establishmentId") REFERENCES public.establishment(id) ON UPDATE CASCADE;


--
-- Name: purchase_order_detail FK_ee2200a64cc0ce90c5a039d0f0a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_order_detail
    ADD CONSTRAINT "FK_ee2200a64cc0ce90c5a039d0f0a" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: purchase_money_box_detail FK_ef07ee390cdf4853f089845977b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_money_box_detail
    ADD CONSTRAINT "FK_ef07ee390cdf4853f089845977b" FOREIGN KEY ("purchaseId") REFERENCES public.purchase(id) ON DELETE CASCADE;


--
-- Name: service_request_concept FK_ef66ca3403741b1084166b848c7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_request_concept
    ADD CONSTRAINT "FK_ef66ca3403741b1084166b848c7" FOREIGN KEY ("conceptId") REFERENCES public.concept(id);


--
-- Name: sale_debit_note FK_f0a2f9a644a10b33d21f81fb767; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note
    ADD CONSTRAINT "FK_f0a2f9a644a10b33d21f81fb767" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: sale_pedido FK_f5241641acd27011c6f0d438d66; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido
    ADD CONSTRAINT "FK_f5241641acd27011c6f0d438d66" FOREIGN KEY ("customerId") REFERENCES public.customer(id) ON UPDATE CASCADE;


--
-- Name: sale FK_f56c6ce28d715db12d8bd0eebdb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT "FK_f56c6ce28d715db12d8bd0eebdb" FOREIGN KEY ("stampingId") REFERENCES public.stamping(id) ON UPDATE CASCADE;


--
-- Name: sale_pedido_sale FK_f67a3d48e474b3b2be7a8652376; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_pedido_sale
    ADD CONSTRAINT "FK_f67a3d48e474b3b2be7a8652376" FOREIGN KEY ("salePedidoId") REFERENCES public.sale_pedido(id) ON DELETE CASCADE;


--
-- Name: supplier FK_fab6bea78157b6f21e26aa85087; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT "FK_fab6bea78157b6f21e26aa85087" FOREIGN KEY ("districtId") REFERENCES public.district(id) ON UPDATE CASCADE;


--
-- Name: credit_note_purchase FK_fb2775ac6f898f07a9a44ed95c1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credit_note_purchase
    ADD CONSTRAINT "FK_fb2775ac6f898f07a9a44ed95c1" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- Name: sale_debit_note FK_ffbcb697d9b4067977752dfac0e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale_debit_note
    ADD CONSTRAINT "FK_ffbcb697d9b4067977752dfac0e" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

