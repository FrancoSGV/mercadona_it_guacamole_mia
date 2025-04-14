from supabase import create_client, Client
import pandas as pd


#______________________Getting the data______________________

def get_data():
    url = "https://vgwvxacwjnbtdqtxjhet.supabase.co"
    key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnd3Z4YWN3am5idGRxdHhqaGV0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDYxNjYwMiwiZXhwIjoyMDYwMTkyNjAyfQ.yWgi3HzbIIQkoH8g_gSX0V2lBU4ATw3Qr3plYSPQca8"
    supabase: Client = create_client(url, key)

    # Ejemplo: leer datos de una tabla
    response = supabase.table('Products').select('*').execute()
    #print(response.data)

    data = response.data
    df = pd.DataFrame(data)
    return df


def get_column_values(df: pd.DataFrame,name:str) -> set:
    result = set(df[name])
    return result




if __name__ == "__main__":
    df = get_data()
    locations = get_column_values(df, "location")
    print(locations)